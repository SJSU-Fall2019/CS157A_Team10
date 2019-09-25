import React, {Component} from 'react';
/**
  * @desc Functional function header
  * @desc Functional function header
  * @desc Functional function header
*/
class Dashboard extends Component
{
   state =  {
      textColor : 'white',
      aBackgroundColor : '#1F70C1',
      aColor:'white',

  }

  SwapColor = () => this.setState(
    {
      textColor: '#1F70C1',
      aBackgroundColor : 'white',
      aColor: '#1F70C1',
    }
  )

  render()
  {

    let aStyle = {
      color: '#1F70C1',
      flex:1,
    }
    const iconStyle  ={
        textAlign:'center',
    }

    let textStyle =
    {
      textAlign:'center',
      color :'#1F70C1',
      fontSize : '1.3vw',
      fontStyle :'italic',
    }
    const divStyle =
    {
      textAlign:'center',
      position: 'relative',
      top: '50%',
      marginTop: '-25%',
    }

    const divWrapperStyle =
    {
      backgroundColor:'white',
      display: 'flex',
      width: '100%',
      height: '100%',
    }

    return (
      <div style = {divWrapperStyle}>
        <a style={aStyle} href ="/">
          <div style = {divStyle}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <div style = {iconStyle} className = "img_container">
              <i className="material-icons"> dashboard </i>
            </div>
            <p style = {textStyle}> Dashboard </p>
          </div>
        </a>
      </div>

    )
  }

}

export default Dashboard;
