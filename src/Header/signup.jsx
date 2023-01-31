import React from 'react'
import Signuppage from './signuppage'
import jiosaavanLogo from './jiosaavanLogo.svg'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <img src={jiosaavanLogo} alt="Logo" style={{position: 'absolute'}}></img>
      <p style={{position: 'absolute', right: '0'}}>Already have an account? <Link to="/login">Log In</Link></p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "1px" }}>
        <div style={{backgroundColor: 'lightgrey', height: '86.3vh',padding:"80px 10px 10px 100px"}}>
          <img src={`https://staticfe.saavn.com/web6/jioindw/dist/1674131648/_i/artist/AtifAslam.png`} 
           alt="a girl pic" height="400" />
           <div style={{padding:"10px 10px 10px 100px"}}>
           <h1>All Your Music.</h1>
           <h2>Anytime, anywhere.</h2>
           </div>
           </div>
           <div>
          <center>
          <h1>Welcome to Jiosaavan.</h1>Sign up with your email address.
          <br/><br/><br/>
          <Signuppage />
          </center>
        </div>
      </div>
    </>
  )
}

export default Signup