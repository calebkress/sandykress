import React, {Component} from 'react';
import styled from 'styled-components';

const LifestyleDiv = styled.div`
  width: 75%;
  margin: auto;
`;

class Lifestyle extends Component {
  render () {
    return (
      <LifestyleDiv>
        <p>In addition to my commitment to work on education reform and religious study, writing, and teaching, I have a strong interest in culture, politics, and sports. Mostly, I care about and advocate for the importance to our culture of preserving and recognizing the best in the arts - painting, music, theater, and film. I write occasionally on literature as well.</p>
        <p>Further, I believe deeply in making our political system more effective and responsive to diverse points of view. My experience in the world of politics was one of bringing together people from all across the political spectrum to common sense solutions that address our society’s problems. Thus, I am anguished by, and write with concern about, the dysfunction in our current politics and the divisions that separate our citizens.</p>
        <p>Finally, I enjoy the heck out of sports and pretend I’m an expert on it. For those interested in my untutored opinions on sports, I write an occasional and usually seasonal sports-related blog. </p>
        <p>I blog on all these matters on http://sandykress.com. *** NEEDS URL CHANGE</p>

      </LifestyleDiv>
    )
  }
}

export default Lifestyle;
