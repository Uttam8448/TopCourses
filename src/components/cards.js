import React from "react";
import Card from "./card"
import { useState } from "react";

function Cards(props){
    let courses=props.courses;
    let category=props.category;
    let allCourses=[];
    const [likedCourses, setLikedCourses] = useState([]);

    //returns all courses data
    const getCourses = () =>{
        //all data is pushed into allCourses
        if(category === "All"){
            //only for all
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((courses) =>{
                    allCourses.push(courses);
                })
            })
        }
        else{
            //main sirf  specific categories ka data pass karunga
            // console.log(courses);
            return courses[category];
        }
       
        return allCourses;
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map( (course) =>{
                return(
                    <Card key={course.id} 
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} />
                )
                
            })
            }
        </div>
    )
}
export default Cards;