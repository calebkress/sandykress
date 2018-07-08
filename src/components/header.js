import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Home from './Home';
import Religion from './religion';
import Education from './education';
import Lifestyle from './lifestyle';

const Profile = styled.img`
  width: 20em;
  height: 12em;
  border-radius: 18%;
  border: 1px solid;
`;

const TitleBar = styled.h1`
  color: black;
  font-family: "Fira Sans";
`

const HeadDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  color: black;
`;

// overall navbar text css
const NavCss = css`
  display: inline-flex;
  font-size: 16px;
  color: black;
  margin: 0 5px;
  font-family: "Raleway";
`
// apply NavCss to links + breaks
const NavLink = styled(Link)`
  ${NavCss};
`;

const NavBreak = styled.p`
  ${NavCss};
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
            <NavBreak> / </NavBreak>
            <NavLink to='religion'>RELIGION</NavLink>
            <NavBreak> / </NavBreak>
            <NavLink to='education'>EDUCATION</NavLink>
            <NavBreak> / </NavBreak>
            <NavLink to='lifestyle'>LIFESTYLE</NavLink>
            <hr />
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
