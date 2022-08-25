import React from "react";
import ReactDOM from "react-dom/client";

class Home extends React.component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>HI</h1>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root"),
    <Home/> 
)