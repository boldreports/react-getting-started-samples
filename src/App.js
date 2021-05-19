import 'bootstrap/dist/css/bootstrap.min.css';
import ReportViewer from './report-viewer';
import ReportDesigner from './report-designer';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/report-viewer"></Redirect>
            </Route>
            <Route path="/report-designer" component={ReportDesigner} exact></Route>
            <Route path="/report-viewer" component={ReportViewer} exact></Route>          </Switch>
          </BrowserRouter>
      </main>
      </div>
  );
}

export default App;
