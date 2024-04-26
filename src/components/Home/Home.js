import React, { useEffect, useRef, useState } from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants, xVariants, xVariants2, xVariants3 } from '../../utils/animations'
const Home = () => {

    const [backToTop, setBackToTop] = useState(false);
    const navigate = useNavigate();
    const scaleRef = useRef();
    const { scrollYProgress } = useScroll({
        target: scaleRef,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.play().catch((error) => {
            console.log("Error playing video:", error);
        });

        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setBackToTop(true)
            }
            else {
                setBackToTop(false)
            }
        })

        videoElement.playbackRate = 0.5;
        // Pause the video when unmounting the component
        return () => {
            videoElement.pause();
        };
    }, []);

    const videoRef = useRef(null);

    const handleSignup = () => {
        navigate("/signup");
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="home-wrapper">
            <Navbar />
            {/* hero section */}
            <div id='herotop' className="hcontainer">
                <div className="herocont">
                    <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className='tt'>Organize your work<br /> and life, finally.</motion.span>
                    <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className='ds'>Become focused, organized, and calm with Todo List. the world class task manager and to-do list app</motion.span>
                    <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={xVariants} className='tb' onClick={() => handleSignup()}>Get Started</motion.button>
                </div>
            </div>

            {/* feature section */}
            <div className="featurecont">
                <div className="featurevid">
                    <video ref={videoRef} id="fbackground-video" autoPlay loop muted playsInline>
                        <source src="/background-video.webm" type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className='f1'>
                        <div className='f1imgdiv'>
                            <motion.img ref={scaleRef} style={{ scale }} src="assets/Tntf.png" alt="todo form" className='f1img' />
                        </div>
                    </div>
                </div>
            </div>

            {/* details section */}
            <div id="homed">

                <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={xVariants2} id='firstd' className="homedetails">
                    <div className="homedcont">

                        <motion.div className="homedinfo">
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="homedtg">Clear your mind</motion.span>
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="homedtit">The fastest way to get tasks out of your head</motion.span>
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className="homedds">Type just about anything into the task field and Todo List’s one-of-its-kind natural language recognition will instantly fill your to-do list.</motion.span>
                        </motion.div>

                        <div className="homedim">
                            <div className="homedimdiv">
                                <motion.img initial={"offscreen"} whileInView={"onscreen"} variants={xVariants} src="assets/tnl.png" alt="login page" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={xVariants3} id='secondd' className="homedetails">
                    <div className="homedcont">

                        <div className="homedim">
                            <div className="homedimdiv">
                                <motion.img initial={"offscreen"} whileInView={"onscreen"} variants={xVariants} src="assets/tntl.png" alt="list items" />
                            </div>
                        </div>

                        <div className="homedinfo">
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="homedtg">Focus on what’s important</motion.span>
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="homedtit">Reach that mental clarity you’ve been longing for.</motion.span>
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className="homedds">Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work.</motion.span>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={xVariants2} id='thirdd' className="homedetails">
                    <div className="homedcont">

                        <div className="homedinfo">
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="homedtg">Organize your teamwork, too</motion.span>
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="homedtit">Where all your tasks can finally coexist.</motion.span>
                            <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className="homedds">Give your team a shared space to collaborate and stay on top of it all – alongside but separate from your personal tasks and projects.</motion.span>
                        </div>

                        <div className="homedim">
                            <div className="homedimdiv">
                                <motion.img initial={"offscreen"} whileInView={"onscreen"} variants={xVariants} src="assets/tns.png" alt="login page" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div >

            {/* pre footer */}
            <div className="pre-footer">
                <div className="pfcont">
                    <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={containerVariants(0.3)} className="pftg">“Todo List makes it easy to go as simple as you want”</motion.span>
                    <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="pftit">Gain calmness and clarity with the<br /> world’s beloved productivity app</motion.span>
                </div>

            </div>

            {/* scrollToTop btn */}
            {backToTop && (
                <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className='scrollttbtn' onClick={() => scrollToTop()}>
                    ^
                </motion.button>
            )}

            {/* bottom footer hr */}
            <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className='homehrd'>
                <hr />
            </motion.div>
            {/* footer */}
            <div id="homefooter" >
                <Footer /></div >

        </div >
    )
}

export default Home