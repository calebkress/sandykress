import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Religion from './components/religion';
import Education from './components/education';
import Lifestyle from './components/lifestyle';

export default (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='religion' component={Religion} />
        <Route path='education' component={Education} />
        <Route path='lifestyle' component={Lifestyle} />
      </Switch>
    </BrowserRouter>
);
