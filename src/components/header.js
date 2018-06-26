import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import Religion from './religion';
import Education from './education';
import Lifestyle from './lifestyle';

const Profile = styled.img`
  width: 20em;
  height: 12em;
  border-radius: 10%;
`;

const TitleBar = styled.h1`
  color: black;
`

const HeadDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`;

class Header extends Component {
  render() {
    return (
      <HeadDiv>
        <Profile src={require('../assets/profile.jpg')} alt="Sandy Kress" />
        <TitleBar>SANDY KRESS</TitleBar>
        <Router>
          <div>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='religion'>RELIGION</NavLink>
            <NavLink to='education'>EDUCATION</NavLink>
            <NavLink to='lifestyle'>LIFESTYLE</NavLink>
            <hr width="50%"/>
            <Route exact path="/" component={Home} />
            <Route path="/religion" component={Religion} />
            <Route path="/education" component={Education} />
            <Route path="/lifestyle" component={Lifestyle} />
          </div>
        </Router>
      </HeadDiv>
    )
  }
}

export default Header;
