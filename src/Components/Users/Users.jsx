import User from "../User/User";

// Used prop destructoring again for readability

const Users = ({users}) => {
    
    // This maps over all of the users and displays the name and role 

    return (
        users.map(user => {
            return <User name={user.name} role={user.role} />;
        })

     );
}
 
export default Users;