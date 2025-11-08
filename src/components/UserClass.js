import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "dummy",
        location: "dummy",
      },
    };
    console.log(this.props.name, "Child Component");
  }

  async componentDidMount() {
    console.log(this.props.name, "Child Mount");
    //API Call
    const data = await fetch("https://api.github.com/users/lakshmitanujakota");
    const json= await data.json();
    console.log(json);

    this.setState({userInfo: json});
  }


  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnamount(){
    console.log("Component Did will Un amount");
  }

  
  render() {
    console.log(this.props.name, "Child Render");
    const{login, location, avatar_url}=this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name :{login}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: tanujakota****</h4>
      </div>
    );
  }
}

export default UserClass;
