import React, { Component } from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
width: 75%;
margin: auto;
`;

const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`;

class Home extends Component {
  render() {
    return (
      <HomeDiv>
        <p>
          What more could I ask for from life? Berkeley in the 60s. Politics
          at high levels, beginning at early ages. A fine education. Cultural
          experiences of the best sort. A wonderful family growing up, and now one
          on my own.
        </p>
        <CenteredHeader>
          What’s been the most notable has been the opportunity to serve.
        </CenteredHeader>
        <p>
          It began with politics. But 25 years ago, I had a revelation: if people are well educated, they’ll
          likely end up well. If not, there will be little government can do to make up
          for the lack. That led me to years of the most fascinating experiences in
          trying, and succeeding in important ways, to improve our schools.
        </p>
        <p>
          Then, about 5 years ago, I had another revelation: if people have a solid
          grounding in ethics, they’ll likely do well. If they don’t, there’s little education
          can do to make up for the lack. And that has led me to a life almost entirely
          devoted to study, writing, and teaching on a wide variety of religious and
          ethical matters.
        </p>
        <p>
          I have communicated, and continue to communicate, a lot about all of this
          service and its particulars. I hope that this website will house, for those
          interested, much of the ideas, experiences, and wisdom that have come
          out of it.
        </p>
      </HomeDiv>
    );
  }
}
export default Home;
