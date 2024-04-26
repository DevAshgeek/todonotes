import React, { useState } from 'react'
import "./Navbar.css"
import { useSelector, useDispatch } from "react-redux";
// import { setTasks, addTask, deleteTask } from '../Reducer/todoReducer';
import { resetTasks } from '../Reducer/todoReducer';
import { clearUser } from '../Reducer/loginReducer';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { tagVariants } from '../../utils/animations';

const Navbar = ({ isLoggedIn, onlogin }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const [islo, setIsMobileOpened] = useState(false);
    const [isMmenuOpened, setIsMmenuOpened] = useState(false);

    const logout = () => {
        dispatch(clearUser());
        dispatch(resetTasks());
        navigate('/home'); // Redirect user to login page
    };

    const handleSignup = () => {
        navigate("/signup");
    }


    const handlelogin = () => {
        navigate("/login");
    }


    return (
        <div className="nav-wrapper">
            <div className="nav-container">

                {/* left side */}
                <div className="ls">
                    <span className="logo">
                        <Link to={!isLoggedIn ? "/home" : ""} >TODO NOTES✔️</Link>
                    </span>
                </div>

                <div className="rs">
                    <div id="bannerbtns" className="bannerbtns">
                        {!isLoggedIn && (
                            <>
                                <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="login" onClick={handlelogin} style={onlogin ? { opacity: 1 } : { opacity: 0.5 }}>Log In</motion.button>
                                <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="signup" onClick={handleSignup} style={onlogin ? { opacity: 0.5 } : { opacity: 1 }}>Get Started</motion.button>

                            </>
                        )}
                        {isLoggedIn && (
                            <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="logout" onClick={logout}>
                                Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </motion.button>
                        )}
                    </div>
                </div>

                <div className="mrs">
                    {
                        !isMmenuOpened &&
                        <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className='closedhamburgermenu'>
                            <i class="fa-solid fa-bars fa-xl" style={{ color: "#a506a7" }}
                                onClick={() => setIsMmenuOpened(true)}>
                            </i>
                        </motion.button>
                    }
                    {
                        isMmenuOpened &&
                        <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className='openedhamburgermenu'>
                            <i class="fa-solid fa-xmark fa-xl" style={{ color: "#a506a7" }}
                                onClick={() => setIsMmenuOpened(false)}>
                            </i>
                        </motion.button>
                    }
                    <div id="mbannerbtns" className="mbannerbtns" style={isMmenuOpened ? { display: "flex" } : { display: "none" }}>

                        {!isLoggedIn && (
                            <>
                                <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="login" onClick={handlelogin} style={onlogin ? { opacity: 1 } : { opacity: 0.5 }} >Log In</motion.button>
                                <hr />
                                <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="signup" onClick={handleSignup} style={onlogin ? { opacity: 0.5 } : { opacity: 1 }} >Get Started</motion.button>
                                <hr />

                            </>
                        )}
                        {isLoggedIn && (
                            <>
                                <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={tagVariants} className="logout" onClick={logout}>
                                    Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                                </motion.button>
                            </>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar