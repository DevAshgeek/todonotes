import React, { useRef, useEffect, useState } from "react"
import "./Signup.css"
import axios from "axios"
// import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants, xVariants2 } from "../../utils/animations"


export default function Signup() {

    // const navigate = useNavigate();
    const nameref = useRef()
    const emailref = useRef();
    const passwordref = useRef();
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSignup() {
        const username = nameref.current.value.trim();
        const password = passwordref.current.value.trim();
        const email = emailref.current.value.trim();


        // Frontend validation
        if (!username || !email || !password) {
            setErrorMessage("All fields are required");
            alert(errorMessage)
            return;
        }

        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            alert(errorMessage)
            return;
        }

        // user register validation 
        try {
            const response = await axios.post("https://todonotes-api.onrender.com/register", { name: username, email, password });

            alert("user registered successfully")
            nameref.current.value = "";
            passwordref.current.value = "";
            emailref.current.value = "";
            setErrorMessage("")
        }
        catch (err) {
            // console.error("error register user: ", err);
            const errorMessage = err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                : "An unexpected error occurred. Please try again.";

            alert(errorMessage);
        }
    }

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.play().catch((error) => {
            console.log("Error playing video:", error);
        });

        videoElement.playbackRate = 0.5;
        // Pause the video when unmounting the component
        return () => {
            videoElement.pause();
        };
    }, []);
    const videoRef = useRef(null);
    return (
        <div className="topcont">
            <Navbar isLoggedIn={false} onlogin={false} />
            <div className="appCont">

                <video ref={videoRef} className="background-video" autoPlay loop muted playsInline>
                    <source src="/background-video.webm" type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={xVariants2} className="signupCard" id="signupCard">

                    <motion.label initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} for="username">Enter your name</motion.label>
                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} name="username" id="username" placeholder="user name" type="text" ref={nameref}></motion.input>


                    <motion.label initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} for="email">Enter the email you want to register with</motion.label>
                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} name="email" id="useremail" placeholder="email id" type="text" ref={emailref}></motion.input>

                    <motion.label initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} for="password">Enter new strong password</motion.label>
                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} name="password" id="upass" placeholder="password" type="password" ref={passwordref}></motion.input>
                </motion.div>
                <div className="signupCont">
                    {/* <button className="loginbtn" onClick={handleLogin}>Login</button> */}
                    <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className="signupbtn" onClick={handleSignup}>SignUp</motion.button>
                </div>
            </div>
            <Footer />
        </div>

    )
}