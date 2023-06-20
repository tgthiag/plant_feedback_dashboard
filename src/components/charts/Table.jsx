import './styles.css'; // Import the custom styles
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CTableBody } from '@coreui/react';
import calculateAverageValue from '../../functions/getIndividualAverage';

function MyDashboardTable({data}) {
    return (
        <div style={{margin:12}}>
        <CTable className="myTable">
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">⠀Tendência⠀</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">⠀Nota⠀</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow>
                    <CTableHeaderCell className="myCustomRow" scope="row">Agendamento</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell>{calculateAverageValue(data,"value1").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableDataCell className="myCustomRow"  scope="row">Condução</CTableDataCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell>{calculateAverageValue(data,"value2").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow  color="secondary">
                    <CTableHeaderCell className="myCustomRow"  scope="row">Segurança</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell>{calculateAverageValue(data,"value3").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow color="success">
                    <CTableHeaderCell className="myCustomRow"  scope="row">5S</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell>{calculateAverageValue(data,"value4").toFixed(1)}</CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                    <CTableHeaderCell className="myCustomRow"  scope="row">Diferencial</CTableHeaderCell>
                    {/* <CTableDataCell>-</CTableDataCell> */}
                    <CTableDataCell>{calculateAverageValue(data,"value5").toFixed(1)}</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
        </div>
    );
}
export default MyDashboardTable;