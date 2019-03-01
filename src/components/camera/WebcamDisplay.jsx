import React from 'react'
import Webcam from 'react-webcam'
import ReusableButton from '../reusable/ReusableButton'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
}

handleCaptureClick(){

}

class WebcamDisplay extends React.Component {
  constructor(props){
    super(props)
    
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
          action
        />
      </div>
    );
  }
}

export default WebcamDisplay