/* eslint-disable */
var viewerStyle = { 'height': '100%', 'width': '100%', 'position' : 'absolute' };

function ReportViewer() {
  return (
    <div style={viewerStyle}>
     <BoldReportViewerComponent
     id="reportviewer-container"
     reportServiceUrl = {'https://demos.boldreports.com/services/api/ReportViewer'}
     reportPath = {'~/Resources/docs/sales-order-detail.rdl'} >
     </BoldReportViewerComponent>
    </div>
  );
}

export default ReportViewer;