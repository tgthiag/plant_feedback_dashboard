function Title({string}) {
    return (
        <div>
            <h1 style={{
                color: "#000000",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
                border: "2px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                padding: "10px",
                background: "linear-gradient(45deg, #ffffff, #e0e0e0)",
                fontWeight: "bold",
                fontSize: 42,
                transform: "translateY(-2px)",
            }}>
                {string}
                </h1>
        </div>
    )
}
export default Title;