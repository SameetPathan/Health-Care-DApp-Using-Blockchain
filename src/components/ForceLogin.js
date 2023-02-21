import {React,useState,useEffect} from 'react'
import MatrixAnimation from './background'
import Loader from './Loader'
import '../Typewriter.css';

function ForceLogin() {

  const [text, setText] = useState("");
  const messages = ["Welcome To Jarvis Systems", "Explore Our Blockchain Services", "A Secure Blockchain HealthChain"];

  useEffect(() => {
    let i = 0;
    let timer = setInterval(() => {
      setText(messages[i]);
      i = (i + 1) % messages.length;
    }, 2000);
    return () => clearInterval(timer);
  }, []);


  return (
  <>
  <Loader></Loader>
    <div className="home-page">
      <img 
      src={process.env.PUBLIC_URL + "/bg2.jpg"} 
      alt="Background" 
      style={{ 
          width: '100%', 
          height: '500px', 
          objectFit: 'cover' 
        }} 
      />
       <div className="typewriter-text">
        {text}
      </div>
    </div>
        
  </>
  )
}

export default ForceLogin