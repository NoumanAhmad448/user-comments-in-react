import React from "react";
import ReactDOM  from "react-dom";
import Nav from "./comp/nav"
import "bootstrap/dist/css/bootstrap.min.css"
import comments from "./comments"
import UserComment from "./comp/Comments";

function App(){
    return (
        <section className="container">
            <Nav />
            <UserComment comments={comments} />
        </section>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))