import React from "react";
import Navbar from "./components/navbar";
import {apiUrl,filterData} from "./data";
import Filter from "./components/filter";
import Cards from "./components/cards";

import { useState } from "react";
import { useEffect } from "react";
import {toast} from "react-toastify";
import Spinner from "./components/spinner";



const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title); 
  //Varient 2 called only when after first time render
  //useEffect(,[]);
  useEffect (() => {
    const fetchData = async() =>{
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        //to call function use ()
        const output = await res.json();
        //Save data into a variable
        setCourses(output.data);
        // console.log(output);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  return(
  <div className="min-h-screen flex flex-col ">
    <div className="bg-bgDark2 min-h-[100vh] ">
      <div >
      <Navbar />
      </div>
      <div>
      <Filter filterData={filterData} 
      category={category}
      setCategory={setCategory} />
      </div>
      <div className="w-11/12  max-w-[1200px] mx-auto flex 
      justify-center items-center flex-wrap  min-h-[50vh]"> 

        {loading? (<Spinner/>) : (<Cards courses = {courses} category={category}/>) }
          
      </div>
      </div>
   
  </div>
)
};

export default App;
