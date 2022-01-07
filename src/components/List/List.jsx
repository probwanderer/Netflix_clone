import React from 'react'
import "./List.scss"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ListItem from  "../ListItem/ListItem";
export default function list() {
    return (
       <div className="list">
           <span className="listTitle">Continue to watch
           </span>
           <div className="wrapper">
           <ArrowBackIos className="sliderArrow"/>
           <div className="container">
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           <ListItem/>
           </div>
        <ArrowForwardIos className="sliderArrow right"/>
           </div>
       </div>
    )
}
