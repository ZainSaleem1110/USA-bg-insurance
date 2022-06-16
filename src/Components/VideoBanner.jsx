import React,{useRef,useEffect,useState} from 'react';
import Video01 from '../images/videos/usabg1.mp4'
import Video02 from '../images/videos/usabg2.mp4'
import Video03 from '../images/videos/usabg3.mp4'
import Video04 from '../images/videos/usabg4.mp4'
import Video05 from '../images/videos/usabg5.mp4'
import Video06 from '../images/videos/usabg6.mp4'

const Videobanner = () => {
    let VideoArr=[Video01,Video02,Video03,Video04,Video05,Video06]
        const [count, setCount] = useState(0);
        
      
        return (
            <div id='videoBanner'>  
            {count==0 && (
            <video width="100%" height="100%" controls autoPlay onEnded={()=> setCount(count+1)}> 
                <source src={VideoArr[count]} type="video/mp4"/>
            </video>
            )}     
            { count==1 && (
            <video width="100%" height="100%" controls autoPlay onEnded={()=> setCount(count+1)}>
                <source src={VideoArr[count]} type="video/mp4"/>
            </video>
            )}  
            { count==2 && (
            <video width="100%" height="100%" controls autoPlay onEnded={()=> setCount(count+1)}>
                <source src={VideoArr[count]} type="video/mp4"/>
            </video>
            )} 
            { count==3 && (
            <video width="100%" height="100%" controls autoPlay onEnded={()=> setCount(count+1)}>
                <source src={VideoArr[count]} type="video/mp4"/>
            </video>
            )} 
            { count==4 && (
            <video width="100%" height="100%" controls autoPlay onEnded={()=> setCount(count+1)}>
                <source src={VideoArr[count]} type="video/mp4"/>
            </video>
            )} 
            { count==5 && (
            <video width="100%" height="100%" controls autoPlay onEnded={()=> setCount(0)}>
                <source src={VideoArr[count]} type="video/mp4"/>
            </video>
            )}  
            </div>
    );
}

export default Videobanner;
