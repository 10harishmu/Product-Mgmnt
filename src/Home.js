
import'./css/home.css';
import poster from "./images_folder/homepage.jpg";

import { useState,useEffect } from 'react';

const Home = () => {    
   let [images,setImages]=useState([]) 
   let [pending,setpending]=useState(false)
       useEffect(() => {
        let fetchdata = async() => {
        let response= await fetch(" http://localhost:4000/images") 
        let resdata= await response.json();
        setImages(resdata) 
        setpending(false)
        };
        fetchdata() 
    
      },[])
     
       return ( 
   
        <div className='home'>
            {pending && <img width={100} src="" />}
                <div className='poster'>
            <img width="1310px" height="400px" src={poster} alt="" />
        </div>
        <div className='sec2'><h1>DEALS OF THE DAY</h1></div>
        <div className="second">
            {images.map((data)=>{
                return(
                    <img id='asdf' height="400px" width="250px" src={data.img} alt=" " /> 
                )
            })}
        </div>
        </div>
     );                                                                                
}
 
export default Home;