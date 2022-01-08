import { PlayArrow,Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@material-ui/icons"
import "./ListItem.scss"
import { useState } from "react";

export default function ListItem({index}) {
    const [isHovered,setIsHovered]=useState(false);
    const trailer=""
    return (
        <div className="listItem" 
        style={{left:isHovered&&index*225-50+index*2.5}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
        >
         <img src="https://www.chsglobe.com/wp-content/uploads/2018/02/Jumanji2_000-e1518027205805.jpg" 
         alt="" 
         />
         {isHovered&&(
             <>
         <video src={trailer} autoplay={true} loop/>
             <div className="itemInfo">
                 <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
                    </div>
                 <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
                  </div>
                 <div className="desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Assumenda, odio totam, incidunt sit.
                 </div>
                 <div className="genre">
                    Action
                 </div>
        </div>
       
        
        </>
        )}
        </div>
    )
}
