import React, { useRef, useEffect, useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useDispatch } from "react-redux"
import { setUser } from "../Reducer/loginReducer"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { desVariants, tagVariants, xVariants2 } from "../../utils/animations";

export default function Login() {
    const navigate = useNavigate();
    const emailref = useRef();
    const passwordref = useRef();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // { setIsLoggedIn }
    async function handleLogin() {
        try {
            const response = await axios.get("https://todonotes-api.onrender.com/users", {
                headers: {
                    email: emailref.current.value,
                    password: passwordref.current.value
                }
            });
            const respdata = response.data;
            let loginSuccessful = false;

            console.log(respdata + emailref.current.value + "")
            if (response.status === 200) {
                for (let res of respdata) {
                    if (res.email === emailref.current.value && res.password === passwordref.current.value) {
                        // console.log("login successful");
                        alert("login successful");
                        setIsLoggedIn(true);
                        dispatch(setUser(res));
                        navigate("/todo", { state: { email: emailref.current.value } });
                        loginSuccessful = true;
                        break;
                    }
                }
                if (!loginSuccessful) {
                    // Alert only if login is unsuccessful after checking all users
                    alert("login details are not correct,Please enter the correct details");
                }
            }
            else {
                alert("Login failed, please try again");
            }
        }
        catch (err) {
            console.error("Error occurred while logging in:", err);
            alert("Please try again after some time");
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
            <Navbar isLoggedIn={isLoggedIn} onlogin={true} />
            <div className="appCont">

                <video ref={videoRef} className="background-video" autoPlay loop muted playsInline>
                    <source src="/background-video.webm" type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={xVariants2} className="loginCard" id="loginCard">
                    <motion.label initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} for="email">Enter your email</motion.label>
                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} name="email" id="useremail" placeholder="email id" type="text" ref={emailref}></motion.input>
                    <motion.label initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} for="password">Enter your password</motion.label>
                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} name="password" id="upass" placeholder="password" type="password" ref={passwordref}></motion.input>
                </motion.div>
                <div className="loginCont">
                    <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className="loginbtn" onClick={handleLogin}>Login</motion.button>
                    {/* <button className="signupbtn" onClick={handleSignup}>SignUp</button> */}
                </div>

            </div>
            <Footer />
        </div>

    )
}