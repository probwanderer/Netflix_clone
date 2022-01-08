
import Navbar from "../../components/Navbar/Navbar"
// import { Acunit } from "@material-ui/icons"
import "./Home.scss"
import React from "react"
import Featured from "../../components/Featured/Featured"
import List from "../../components/List/List"
const Home = () => {
    return (
       

        <div className="home">
          <Navbar/>
          <Featured/>
          <List/>
          <List/>
          <List/>
        </div>
     
        
    )
}

export default Home
