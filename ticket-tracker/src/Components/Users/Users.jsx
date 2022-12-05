import User from "../User/User";


const Users = (props) => {
    const {users} = props;

    return (
        users.map(user => {
            return <User name={user.name} role={user.role} />;
        })

     );
}
 
export default Users;