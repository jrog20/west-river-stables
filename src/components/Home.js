import React, { Component } from 'react';
// Why is this not found?
// import lessoninfall from '../assets/images/lessoninfall.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        {/* Hero image Here - If I want the Hero image to change depending on the 'page', just change its state. */}
        <img src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/p720x720/121307571_3365457176863878_5338307208764464459_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=1u2tWmuq_ZcAX-dZmAQ&_nc_ht=scontent-bos3-1.xx&oh=f25832aed5648714af2f34dd9f50034f&oe=60FE11C5' alt="Horse"></img>
        {/* <img src={lessoninfall} alt="Lesson in Fall" /> */}
      </div>
    );
  }
};

export default Header;
