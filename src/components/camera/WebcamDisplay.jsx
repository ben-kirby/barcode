import React from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
}

function WebcamDisplay(){
  return(
    <Webcam
      audio={false}
      height={500}
      width={500}
      videoConstraints={videoConstraints} /> 
  )
}

export default WebcamDisplay