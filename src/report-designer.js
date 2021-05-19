/* eslint-disable */
var designerStyle = { 'height': '100%', 'width': '100%', 'position': 'absolute' };

function ReportDesigner() {
  return (
    <div style={designerStyle} className="App">
    <BoldReportDesignerComponent
    id="reportdesigner-container"
    serviceUrl={'https://demos.boldreports.com/services/api/ReportDesignerWebApi'}>
    </BoldReportDesignerComponent>
</div>
  );
}
export default ReportDesigner;