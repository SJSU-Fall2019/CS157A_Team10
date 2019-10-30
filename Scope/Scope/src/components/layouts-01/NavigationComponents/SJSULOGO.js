import React from 'react';
import SJSULOGO from './logos/SJSU.gif'
/**
  * @desc Functional function header
  * @desc Functional function header
  * @desc Functional function header
*/
function SJSU()
{
  return (
    <div className = "SJSU_LOGO" style = {divStyle}>
    </div>
      )
}


const divStyle ={
  height: '100px',
  width: '70%',
  backgroundImage: `url(${SJSULOGO})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}





export default SJSU;
