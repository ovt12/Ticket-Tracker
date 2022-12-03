import React from "react";
import { useState } from "react";
import "../User/User.scss"
import Counter from "../Counter/Counter";

const User = (props) => {
    const name = props.name
    const role = props.role

    
    return (
        <div className="user">
            <div className="user__details">
                <h2 className="user__name">{name}</h2>
                <h2 className="user__role">{role}</h2>
                <Counter/>
                </div>
        </div>

    );
}
 
export default User;