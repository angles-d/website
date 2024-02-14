import { useState } from "react";
export default function Carousel ({videos}){
    const [index, setIndex] = useState(0);
    const num_vids = videos.length;

    return  (<>
    {/* left button */}
    <div className="row d-flex align-items-center mb-3">
        <button className="prev-button" onClick={()=>{
            if (index == 0) return 
            setIndex(index - 1)
            console.log(index)
        }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              width = "29"
              height =" 29"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
            </svg>
        </button>
      {/* Carousel */} 
       { index == 0 && <video height={400} src={videos[0]}controls autoPlay muted/>}
       { index == 1 && <video height={400} src={videos[1]}controls autoPlay muted/>}
       { index == 2 && <video height={400} src={videos[2]}controls autoPlay muted/>}
         {/* right button */}
         <button className="next-button"  onClick={()=>{
            console.log("NEXT")
            if (index == num_vids - 1 ) return 
            setIndex(index + 1)
            console.log(videos[index])
        }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              width = "29"
              height =" 29"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
               <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
            </svg>
        </button>
      </div>
        </>
       )
  }
  