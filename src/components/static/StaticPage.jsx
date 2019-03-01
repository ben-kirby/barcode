import React from 'react';
import capturedimage from '../../assets/CapturedImage.jpg'
import UPC from './UPC'
import StaticResponse from './StaticResponse.json'
import WebcamDisplay from '../camera/WebcamDisplay'

function StaticPage(){
  return(
    <div>
      <WebcamDisplay />
    </div>
  );
}

export default StaticPage;