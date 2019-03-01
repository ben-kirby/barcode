import React from 'react'
import Webcam from 'react-webcam'
import ReusableButton from '../reusable/ReusableButton'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
}



class WebcamDisplay extends React.Component {
  constructor(props){
    super(props);
    this.handleScreenCapture = this.handleScreenCapture.bind(this)
  }

  handleScreenCapture(props){
    let _photo = null;
    console.log('hello');
    
  }

  render(){
    return (
      <div>
        <Webcam
          audio={false}
          height={500}
          width={500}
          videoConstraints={videoConstraints} />

        <ReusableButton
          title='capture'
          onClick={this.handleScreenCapture}
        />
      </div>
    );
  }
}

export default WebcamDisplay