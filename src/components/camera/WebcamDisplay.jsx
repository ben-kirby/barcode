import React from 'react';
import Webcam from 'react-webcam';
import ReusableButton from '../reusable/ReusableButton';
import Quagga from 'quagga';


class WebcamDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
      barcodePresent: false,
    };
    
    this.handleCapture = this.handleCapture.bind(this);
    this.setRef = this.setRef.bind(this);
    this.decodeBarcode = this.decodeBarcode.bind(this);
  }
  
  setRef(webcam) {
    this.webcam = webcam;
  }
  
  handleCapture() {
    let imageSrc = this.webcam.getScreenshot();
    this.setState({imageData: imageSrc});
  }

  decodeBarcode(){
    
  }
  
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    if (this.state.imageData != null) {
      this.decodeBarcode();
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