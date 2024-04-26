import "./Todo.css"
import React, { useEffect, useRef, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { setTasks, addTask, deleteTask, resetTasks } from '../Reducer/todoReducer';
// import { clearUser } from '../Reducer/loginReducer';
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { desVariants, titleVariants, xVariants, xVariants2, xVariants4 } from "../../utils/animations";


function Todo() {
    const inputtitleref = useRef(null);
    const inputdesref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tasks = useSelector((state) => state.todo.tasks);
    const userEmail = useSelector((state) => state.login.user?.email)
    // const location = useLocation();//to get url we currently at
    const [showTodoNotes, setShowTodoNotes] = useState(false);
    const [showAddedTodo, setShowAddedTodo] = useState(false);

    const addTaskHandler = (event) => {
        event.preventDefault();
        let currentTitle = inputtitleref.current.value.trim()
        let currentDescription = inputdesref.current.value.trim()

        console.log(currentTitle + currentDescription);

        if (currentTitle !== "" && currentDescription !== "") {

            const newTask = {
                id: uuidv4(),
                title: currentTitle,
                description: currentDescription,
            };
            dispatch(addTask(newTask));
            console.log(tasks);
            inputdesref.current.value = "";
            inputtitleref.current.value = "";
        } else {
            alert("kindly enter the fields first")
        }

    }

    const savetasks = async () => {

        try {
            await axios.post("http://localhost:4000/addTask",
                {
                    email: userEmail,
                    tasks: tasks
                })

            console.log("tasks saved successfully");
        }
        catch (err) {
            console.error("error saving the file", err)
        }
    }



    const deleteTodo = async (todoId) => {
        try {
            const response = await axios.delete('http://localhost:4000/deleteTodo', {
                data: { email: userEmail, taskId: todoId } // Axios expects the request body for DELETE requests in the `data` property
            });
            console.log("Task deleted successfully", response.data);

            dispatch(deleteTask(todoId)); // Update your front-end state as necessary
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    }


    const toggleTodoNotes = () => {
        setShowTodoNotes(!showTodoNotes);
        setShowAddedTodo(false);
    };

    const toggleAddedTodo = () => {
        setShowAddedTodo(!showAddedTodo);
        setShowTodoNotes(false);
    };


    useEffect(() => {
        const fetchTask = async () => {
            try {
                console.log(userEmail)
                const resp = await axios.post("http://localhost:4000/getTasks", { email: userEmail })
                dispatch(setTasks(resp.data));
            }
            catch (err) {
                console.log("unable to fetch", err)
            }
        }
        fetchTask();
    }, [userEmail, dispatch])

    return (
        <>
            <Navbar id="navbartodo" isLoggedIn={true} />
            <div className="todo-wrapper">

                <div className="tcontainer">
                    {/* left buttons */}
                    <span className="btn-span">
                        <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="addtodo" title="Add a New Todo" onClick={toggleTodoNotes}><i class="fa-solid fa-circle-plus fa-2xl" style={{ color: "#3afc05" }}></i></motion.button>
                        <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} className="todolist" title="Todo List.Click Save All Task to save changes" onClick={toggleAddedTodo}><i class="fa-solid fa-eye fa-2xl" style={{ color: "#3afc05" }}></i></motion.button>
                    </span>
                    {/* right contents */}
                    <div className="todo-container">
                        {showTodoNotes && (
                            <motion.div initial={"offscreen"} whileInView={"onscreen"} variants={xVariants4} className="todonotes">
                                <motion.span initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} className="todotitle">ADD NOTES➕</motion.span>
                                <div className="inputcont">
                                    <label htmlFor="todotitle">Add title here</label>
                                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} type="text" name="todotitle" placeholder="Enter title" className="todoinput" ref={inputtitleref} />
                                    <label htmlFor="tododes">Add description here</label>
                                    <motion.input initial={"offscreen"} whileInView={"onscreen"} variants={titleVariants} type="text" name="tododes" placeholder="Enter description" className="todoinput" ref={inputdesref} />
                                    <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={xVariants} className="addbtn" onClick={addTaskHandler}>Add</motion.button>
                                    <motion.button initial={"offscreen"} whileInView={"onscreen"} variants={xVariants} className="savetasksbtn" onClick={savetasks}>Save All Tasks</motion.button>
                                </div>
                            </motion.div>
                        )}

                        {showAddedTodo && (
                            <div className="Addedtodo">
                                <motion.ul initial={"offscreen"} whileInView={"onscreen"} variants={xVariants4} className="taskList">
                                    {tasks.map((task, index) => (
                                        <motion.li initial={"offscreen"} whileInView={"onscreen"} variants={desVariants} key={task.id} className="task">
                                            <input type="checkbox" className="task-checkbox" onChange={() => deleteTodo(task.id)} />
                                            <div className="taskdetails">
                                                <h4 className="taskhead">{task.title}</h4>
                                                <p>{task.description}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>

    )
}

//  onClick={() => deleteTodo(index)} className="deletebtn"

export default Todo