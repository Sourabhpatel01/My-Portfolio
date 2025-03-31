import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import "../External CSS/Contact.css";
import Swal from 'sweetalert2'
import axios from 'axios';

const Contact = () => {

  const [email,setEmail]=useState("");
  const[name,setName]=useState("");
  const [message,setMessage]=useState("");

  // console.log(email,name,message)

// setEmail("sourabhpatel143@gmail.com")
// console.log(email);

function submitFunction(){


  if(name==="" || name===undefined || name===null){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Name cannot be null",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
return;

  }
  if(email==="" || email===undefined || email===null){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email cannot be null",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
return;
  }
  if(message==="" || message===undefined || message===null){

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Message cannot be null",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    return;
  }

  Swal.fire({
    title: "Feedback Submitted",
    text: "Thanks, we will contact you soon.",
    icon: "success"
  }).then(()=>{
//sending data to backend
let data={
  name,
  email,
  message
}
console.log(data)

axios.post("http://localhost:8080/save",data).then((response)=>{
  console.log(response);
}).catch((err)=>{
  console.log(err);
})







    setName("");
    setEmail("");
    setMessage("");
  })




}



    function downloadCV (){
        window.open('./RESUME.pdf', '_blank');
        // window.location.href="./RESUME.pdf"
    }
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Details */}
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p><FaPhone /> +91 9179229771</p>
          <p><FaEnvelope /> sourabhpatel0143@gmail.com</p>
          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
          <button className="download-cv" onClick={downloadCV}><FaDownload /> Download CV </button>
          
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2>Send Me a Message</h2>
    
            <input type="text" placeholder="Enter Your Name" required value={name} onChange={(event)=>{setName(event.target.value)}}/>
            <input type="email" placeholder="Enter Your Email" required value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
            <textarea placeholder="Enter Your Message" required value={message} onChange={(event)=>{setMessage(event.target.value)}}></textarea>
            <button onClick={submitFunction}>Submit</button>

        </div>
      </div>
    </section>
  );
};

export default Contact;
