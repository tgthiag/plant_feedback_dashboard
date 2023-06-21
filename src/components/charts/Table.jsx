import './styles.css'; // Import the custom styles
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from '@coreui/react';
import calculateAverageValue from '../../functions/getIndividualAverage';

function MyDashboardTable({data}) {
    return (
        <div style={{margin:12}}>
        <CTable className="myTable">
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell className="myTableHeader" scope="col">Item</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">⠀Tendência⠀</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Media</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow>
                    <CTableHeaderCell className={calculateAverageValue(data,"value1") > 7.5 ? "myCustomRow": "myCustomRow2"} scope="row">Agendamento</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell className={calculateAverageValue(data,"value1") > 7.5 ? "myCustomValue": "myCustomValue2"}>{calculateAverageValue(data,"value1").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell className={calculateAverageValue(data,"value2") > 7.5 ? "myCustomRow": "myCustomRow2"}  scope="row">Condução</CTableDataCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell className={calculateAverageValue(data,"value2") > 7.5 ? "myCustomValue": "myCustomValue2"}>{calculateAverageValue(data,"value2").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow  color="secondary">
                    <CTableHeaderCell className={calculateAverageValue(data,"value3") > 7.5 ? "myCustomRow": "myCustomRow2"}  scope="row">Segurança</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell className={calculateAverageValue(data,"value3") > 7.5 ? "myCustomValue": "myCustomValue2"}>{calculateAverageValue(data,"value3").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow color="success">
                    <CTableHeaderCell className={calculateAverageValue(data,"value4") > 7.5 ? "myCustomRow": "myCustomRow2"}  scope="row">5S</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell className={calculateAverageValue(data,"value4") > 7.5 ? "myCustomValue": "myCustomValue2"}>{calculateAverageValue(data,"value4").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                    <CTableHeaderCell className={calculateAverageValue(data,"value5") > 7.5 ? "myCustomRow": "myCustomRow2"}  scope="row">Diferencial</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell className={calculateAverageValue(data,"value5") > 7.5 ? "myCustomValue": "myCustomValue2"}>{calculateAverageValue(data,"value5").toFixed(1)}</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
        </div>
    );
}
export default MyDashboardTable;