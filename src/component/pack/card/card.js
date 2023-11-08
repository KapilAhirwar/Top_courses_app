import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import './card.css';
// import React,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
function card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((pre) => pre.filter( (cid) => cid !== course.id));
            toast.warning("Like Removed");
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className='main-card'>
            <img src={course.image.url}></img>
            <button className='icon' onClick={clickHandler} >
                {
                    likedCourses.includes(course.id)? (<FcLike/>):(<FcLikePlaceholder/>)
                }
                <ToastContainer/>
                
            </button>

            <h3 className='heading'>{course.title}</h3>
            <div className='detail'>
                {
                    course.description.length >100 ? (course.description.substr(0,100)) + "..." :(course.description)   
                }
            </div>
        </div>
    );
}
export default card;


































    // const allData = props.course;
    // let likedCourses = allData.likedCourses;
    // let setLikedCourses = allData.setlikedCourses;
    // // let category = props.category;

    // function clickHandler(){
    //     if(likedCourses.includes(allData.id)){
    //                setLikedCourses((pre) => pre.filter( (cid) => cid !== allData.id));
    //                toast.warning("Like Removed");
    //     }else{
    //         if(likedCourses.length === 0){
    //             setLikedCourses([allData.id]);
    //         }else{
    //             setLikedCourses( (prev) => [...prev, allData.id]);
    //         }
    //             toast.success("Liked Successfully");
    //     }
    // }
    // // const[readmore,setReadmore] = useState(false);
    // // const description = readmore ? info :`${info.substring(0,200)}....`;
    // // function readmoreHandler() {
    // //     setReadmore(!readmore);
    // // }

    // return(
    //     <div className='main-card'>
    //         <img src={allData.image.url}></img>
    //         <button className='icon' onClick={clickHandler} >
    //              {
    //                  likedCourses.includes(allData.id)? (<FcLikePlaceholder/>):(<FcLike/>)
    //              }
                
    //          </button>
    //         <h3 className='heading'>{allData.title}</h3>
    //         <div className='detail'>
    //             {
    //                 allData.description.length > 100 ? (allData.description.substr(0,100))+'...':(allData.description)
    //             }
    //         </div>
    //     </div>
    // )