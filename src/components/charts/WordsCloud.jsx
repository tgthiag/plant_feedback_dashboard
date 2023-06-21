import React, { useCallback, useEffect, useState } from 'react';
import WordCloud from 'react-d3-cloud';

import { capitalizeWords } from '../../functions/capitalizeWords';

function WordsCloud({ rawData }) {
  const [finalData, setFinalData] = useState([]);
  const [wordColors, setWordColors] = useState([]);

  useEffect(() => {
    const getWordFrequencies = () => {
      const words = [];
      rawData.forEach((item) => {
        const commentText = item.comment;
        if (commentText) {
          const commentWords = commentText.split(' ');
          const forbiddenList = ["muito", "que", "uma", "foi", "mas", "mais"]
          const filteredWords = commentWords.filter((word) => word.length > 2 && !forbiddenList.includes(word.toLowerCase()));
          words.push(...filteredWords);
        }
      });

      const wordFrequencies = words.reduce((acc, word) => {
        acc[capitalizeWords(word)] = (acc[capitalizeWords(word)] || 0) + 8;
        return acc;
      }, {});

      const sortedWords = Object.entries(wordFrequencies).sort((a, b) => b[1] - a[1]);

      return sortedWords.map(([word, frequency]) => ({ text: word, value: frequency }));
    };

    setFinalData(getWordFrequencies());
  }, [rawData]);

  useEffect(() => {
    const generateWordColors = () => {
      const minBrightness = 0; // Minimum brightness value (0-255)
      const maxBrightness = 150; // Maximum brightness value (0-255)

      if (finalData.length > 0) {
        const colors = finalData.map((_, i) => {
          return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * (maxBrightness - minBrightness) + minBrightness
          )}, ${Math.floor(Math.random() * 256)})`;
        });

        setWordColors(colors);
      }
    };

    generateWordColors();
  }, [finalData]);

  const fontSize = useCallback((word) => Math.log2(word.value) * 8, []);
  const rotate = useCallback((word) =>  0, []);
  const fill = useCallback(
    (_, i) => wordColors[i % wordColors.length] || 'gray', // Provide a default color if the number of words exceeds the number of colors generated
    [wordColors]
  );
  const onWordClick = useCallback((word) => {
    console.log(`onWordClick: ${word}`);
  }, []);

  return (
    <div>
      <WordCloud
        data={finalData}
        width={600}
        height={400}
        font="Arial"
        fontWeight="900"
        fontSize={fontSize}
        spiral="rectangular"
        rotate={rotate}
        padding={5}
        random={Math.random}
        fill={fill}
        onWordClick={onWordClick}
      />
    </div>
  );
}

export default WordsCloud;
