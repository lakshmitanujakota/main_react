import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";



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
            <div>
                logged in user: 
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h1>Nameste for choosing this app.</h1>
            <UserClass name="First " location="Andhra Pradesh"/>
        </div>
    )
    }
}


export default About;