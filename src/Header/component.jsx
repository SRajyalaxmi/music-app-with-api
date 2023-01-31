import React from 'react'
import jiosaavanLogo from './jiosaavanLogo.svg'
import TabComponent from './TabComponent'
import MusicLanguage from './MusicLanguage'
import {Link} from 'react-router-dom'
import './component.css'

const Component = () => {
  return (
    <header>
      <div style={{ display: "flex",alignItems:"center", height: 88,position:"fixed", left: '0', 
           right: '0', backgroundColor: '#fff', zIndex: '10' }}>
        <img src={jiosaavanLogo} alt="Logo"></img>
        <TabComponent />
        <input className='second-div' style={{ padding: "10px 30px ",margin:"0 90px",flex:"1", 
        borderRadius: "20px", textAlign: "center",  }} 
        type="text" placeholder='Search music here...' />
        <MusicLanguage />&nbsp;&nbsp;&nbsp;
        <Link to='/login' style={{textDecoration:"none",fontWeight:"bold"}}>Log In</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/signup' style={{textDecoration:"none",fontWeight:"bold"}}>Sign Up</Link>&nbsp;&nbsp;&nbsp;
      </div>
    </header>
  )
}
export default Component