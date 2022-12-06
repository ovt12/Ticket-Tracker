import React from "react";
import "../User/User.scss"
import Counter from "../Counter/Counter";

// Used props to get the data needed for the user
// Again used prop destructoring 

const User = ({name, role}) => {
    // JSX for the user card
    return (
        <div className="user">
            <div className="user__details">
                <h2 className="user__name">{name}</h2>
                <h3 className="user__role">{role}</h3>
                <Counter/>
                </div>
        </div>

    );
}
 
export default User;