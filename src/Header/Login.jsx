import React from 'react'
import LoginPage from './LoginPage'
import jiosaavanLogo from './jiosaavanLogo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <img src={jiosaavanLogo} alt="Logo" style={{position: 'absolute'}}></img>
      <p style={{position: 'absolute', right: '0'}}>Don't have an account <Link to="/signup">Sign Up</Link></p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "1px" }}>
        <div style={{backgroundColor: 'lightpink', height: '86.3vh',padding:"80px 10px 10px 100px"}}>
          <img src={`https://staticfe.saavn.com/web6/jioindw/dist/1674131648/_i/artist/KaurB.png`} 
           alt="a girl pic" height="400" />
           <div style={{padding:"10px 10px 10px 100px"}}>
           <h1>All Your Music.</h1>
           <h2>Anytime, anywhere.</h2>
           </div>
           </div>
        <div>
          <center>
          <h1>Welcome to Jiosaavan.</h1>Log in or sign up with your email address.
          <br/><br/><br/>
          <LoginPage />
          </center>
        </div>
      </div>
    </>
  )
}

export default Login
