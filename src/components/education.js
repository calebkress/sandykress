import React, {Component} from 'react';
import styled from 'styled-components';

const EducationDiv = styled.div`
  width: 75%;
  margin: auto;
`;

class Education extends Component {
  render () {
    return (
      <EducationDiv>
        <p> I made a personal decision 25 years ago to transfer the energy and spirit he had devoted earlier in my life in the partisan political arena to the task of reforming public education. I was appointed in 1990 to chair a commission in Dallas to propose major reforms to improve the operations of the Dallas Public Schools. The school board adopted most of the reforms the Commission proposed, and I then ran for and won a Board seat in 1992 to push for implementation of the reforms. I subsequently served as Vice President and President of the Board. By 1996, when I left the Board, the Dallas Public Schools had made unprecedented gains in student achievement as a result of these reforms. </p>
        <p>Lieutenant Governor Bob Bullock noted the progress in Dallas and appointed me to the State Education and Economic Policy Committee. There I chaired the subcommittee that designed the education accountability system that the Legislature subsequently implemented in 1993. This accountability system was one of the first of its kind in the nation and led to significant student gains in Texas over the years that followed. </p>
        <p>President George W. Bush named me as his senior education adviser in the White House with respect to helping develop and pass NCLB.

Subsequently, Governor Perry asked me to Chair the Commission for a College Ready Texas and serve on his Competitiveness Council. In both roles, I pushed policies designed to help prepare more young Texans for postsecondary success, thereby improving their prospects in life as well as strengthening the overall economy in the state. </p>
        <p>I blog periodically on all matters education <a href="https://sandykress.weebly.com" target="_blank">here</a>.</p>
      </EducationDiv>
    )
  }
}

export default Education;
