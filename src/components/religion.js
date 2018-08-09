import React, {Component} from 'react';
import styled from 'styled-components';

const ReligionDiv = styled.div`
  width: 75%;
  margin: auto;
`;

class Religion extends Component {
  render () {
    return (
      <ReligionDiv>
        <p>The posts <a href="https://sandykress.wordpress.com/" target="_blank">here on Wordpress</a> include blogs on each Torah portion and Haftarah portion from the Prophets and, more recently, blogs on favorite proverbs. Also, intermittently one will find blogs that make up a “coffee with great sages,”in which the best ideas of some of the finest religious thinkers of all time can be found and encountered in the time it takes to drink, say, a venti chai latte.</p>
        <p>I am now turning most of my time, energy, and spirit to the study and teaching of sacred texts and other religious topics. This engagement began with a major endeavor to teach the entire Torah cycle with an adult Bible study class at the Westlake Hills Presbyterian Church in Austin, Texas. All materials, including the lesson plans for, and audios of, the classes can be found at <a href="https://www.thirdwell.org/" target="_blank">The Third Well</a> under Hebrew Bible Studies.</p>
        <p>More recently, I began teaching at other churches, synagogues, as well as with neighborhood groups and in University settings. I teach weekly on a wide range of matters, involving the various books of the Hebrew Bible, the Talmud, ancient wisdom sayings, and a variety of theological and ethical topics.</p>
        <p>I recently began a podcast called <a href="https://itunes.apple.com/us/podcast/a-shared-word/id1375838631?mt=2" target="_blank">A Shared Word</a> on religious matters with my good friend, Mark Charbonneau, pastor at The Vine, in Austin, Texas.</p>
      </ReligionDiv>
    )
  }
}

export default Religion;
