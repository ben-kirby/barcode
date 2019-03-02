import React from 'react';
import Webcam from 'react-webcam';
import ReusableButton from '../reusable/ReusableButton';
import Quagga from 'quagga';
import barcodeImage from '../../assets/CapturedImage.jpg';


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
    console.log(this.state.imageData);
    
    Quagga.decodeSingle({
      decoder: {
        readers: ['upc_reader', 'upc_e_reader'] 
      },
      locate: true, 
      src: barcodeImage
    }, function (result) {

      if (result.codeResult) {
        console.log("result", result.codeResult.code);
      } else {
        console.log("not detected");
      }
    });
  }

  
  
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    if (this.state.imageData != null) {
      this.decodeBarcode(this.state.imageData);
    }

    return (
      <div>
        <Webcam
          audio={false}
          height={500}
          width={500}
          screenshotFormat={'image/jpeg'}
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

export default WebcamDisplay