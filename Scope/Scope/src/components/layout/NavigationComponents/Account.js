import React , {Component} from 'react';

/**
  * @desc Functional function header
  * @desc Functional function header
  * @desc Functional function header
*/
export class Account extends Component
{
  render()
  {

    const AccountStyle =
    {
        display: 'flex',
        width: '100%',
        height: '100%',
    }

    const aStyle = {
            "&:hover":{
            },
        color:'white',
        flex:1,
        background:'#1F70C1',
      }
      const iconContainerStyle  ={
          textAlign:'center',

    }

      const textStyle =
      {
        textAlign:'center',
        color: 'white',
        fontSize: '1.3vw',
        fontStyle :'italic',


      }

      const divStyle =
      {
        position: 'relative',
        top: '50%',
        marginTop: '-25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }


    return (
        <div className = "Account_navi" style = {AccountStyle}>
          <a style={aStyle} href ="www.google.com">
            <div style  ={divStyle}>
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
              <div style = {iconContainerStyle} className = "img_container">
                <i className="material-icons"> perm_identity </i>
              </div>
              <p style = {textStyle}> Account </p>
            </div>
          </a>
        </div>
        )
  }
}

export default Account;
