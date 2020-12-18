// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {DataProvider} from 'components/Context'

// Internals
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

// import App from './App';
import BaseLayout from 'components/Baselayout'
import Login from 'components/Login-Page'
import HomePage from 'components/Home-Page'
import AdminPage from 'components/Admin-Page'
import ReportPage from 'components/Report-Page'
import FieldDataPage from 'components/FieldData-Page'
import DetailPage from 'components/FieldData-Page/DetailField-Page'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/HomePage" component={HomePage} />
      <BaseLayout>
        <DataProvider>
          <Route path="/AdminPage" component={AdminPage} />
          <Route path="/ReportPage" component={ReportPage} />
          <Route path="/FieldDataPage" component={FieldDataPage} />
          <Route path="/DetailPage/:ODP_ID" component={DetailPage} />
        </DataProvider>
      </BaseLayout>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
