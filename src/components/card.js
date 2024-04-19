import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
    function clickHandler() {
        //logic
    
        if(likedCourses.includes(course.id)){
            //this current card is liked before
            setLikedCourses((prev) =>prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like Removed");
        }
        else{
            //this current course is not liked yet
            //insert karna hai ye course liked courses me
            if(likedCourses.length === 0) {
                //if no course is liked yet
                setLikedCourses([course.id]); 
            }
            else{
                //if some course had been liked before
                setLikedCourses((prev) =>[...prev, course.id])
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 text-white rounded-md overflow-hidden">
            <div className="relative ">
                <img className="" src={course.image.url}></img>
                <div className=" w-[40px] h-[40px] rounded-full absolute right-2 bottom-[-12px] bg-white grid place-items-center">
                    <button onClick={clickHandler} >
                        {
                        likedCourses.includes(course.id)?
                        <FcLike fontSize="1.75rem" />
                        :<FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className="font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2">
                    {   course.description.length >100 ? 
                        (course.description.substr(0,100))+"....": 
                        (course.description)}
                    </p>
            </div>
        </div>
    )
}
export default Card; 