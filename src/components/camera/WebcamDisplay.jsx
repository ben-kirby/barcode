import React from 'react';
import Webcam from 'react-webcam';
import ReusableButton from '../reusable/ReusableButton';
import Quagga from 'quagga';
import capturedImage from '../../assets/png_test.png'

class WebcamDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
    };

    this.handleCapture = this.handleCapture.bind(this);
    this.setRef = this.setRef.bind(this);
    this.decodeImage = this.decodeImage.bind(this);
  }

  setRef(webcam) {
    this.webcam = webcam;
  }

  handleCapture() {
    let imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
    

    Quagga.decodeSingle({
      decoder: {
        readers: ["upc_reader", "upc_e_reader", "code_128_reader"] 
      },
      locate: true, 
      src: capturedImage
    }, function (result) {
      console.log(result);
      
      if (result.codeResult) {
        console.log("result", result.codeResult.code);
      } else {
        console.log("not detected");
      }
    });
  }

  decodeImage(blob){    
    
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={500}
          width={500}
          screenshotFormat={'image/png'}
          ref={this.setRef}
          videoConstraints={videoConstraints} />

        <ReusableButton
          title='Capture'
          onClick={this.handleCapture}
        />
      </div>
    );
  }
}

export default WebcamDisplay;