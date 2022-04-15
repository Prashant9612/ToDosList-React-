import React from 'react';

const About = () => {
  let myStyle={
    minHeight: "90vh"
}
  return (
    <div className='container' style={myStyle}>
      <h3>This is a about component</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi, sed explicabo dolore culpa voluptas tempora impedit exercitationem omnis quia ipsam, ab assumenda totam ex sit maxime doloribus asperiores iusto?</p>
    </div>
  );
}

export default About;
