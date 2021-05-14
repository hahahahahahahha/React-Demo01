import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 主程序
// import App from './App';
// 首页
import Home from './components/home'
// 积分
import Integral from './components/integral'
// 积分详情
import IntegralDetail from './components/integralDetail'
// 路由表
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/integral" component={Integral}></Route>
        <Route path="/integralDetail/:id" component={IntegralDetail}></Route>
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
