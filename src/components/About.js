import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

    constructor(props){
        super(props)
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Mount")
    }
    render(){
        console.log("Parent Render");
        return(
        <div>
            <h1>Nameste for choosing this app.</h1>
            <UserClass name="First " location="Andhra Pradesh"/>
        </div>
    )
    }
}


export default About;