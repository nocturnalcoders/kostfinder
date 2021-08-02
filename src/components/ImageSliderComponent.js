import React, { Component } from 'react';
import Slideshow from 'react-native-image-slider-show';

class ImageCarousel extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            // title: 'Title 1',
            // caption: 'Caption 1',
            url: 'https://indo-remotecache.99.co/20200114/145210/16728f9f182bcb59cdd102f819300081/kamar%20anak.jpg',
          }, {
            // title: 'Title 2',
            // caption: 'Caption 2',
            url: 'https://cdn.popbela.com/content-images/post/20200411/457b26c98ced2d3b961fa050d593e7a1_750x500.png',
          }, {
            // title: 'Title 3',
            // caption: 'Caption 3',
            url: 'https://www.harapanrakyat.com/wp-content/uploads/2020/04/Desain-Kamar-Tidur-Nyaman-Hangat.jpg',
          },
        ],
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 2000)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      );
    }
  }
  export default ImageCarousel;

// CardComponent.
//            {props.title}
//{props.userid}
//onPress={props.handlePress}

