import React from 'react'
import Webcam from 'react-webcam'
import ReusableButton from '../reusable/ReusableButton'


class WebcamDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
    };
    
    this.handleCapture = this.handleCapture.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  
  setRef(webcam) {
    this.webcam = webcam;
  }
  
  handleCapture() {
    let imageSrc = this.webcam.getScreenshot();
    this.setState({imageData: imageSrc});
    console.log(this.state.imageData);
    
    
  }
  
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    }
    return (
      <div>
        <Webcam
          audio={false}
          height={500}
          width={500}
          ref={this.setRef}
          videoConstraints={videoConstraints} />

        <ReusableButton
          title='Capture'
          onClick={this.handleCapture}
        />
        <img src={this.state.imageData} />
      </div>
    );
  }
}

export default WebcamDisplay