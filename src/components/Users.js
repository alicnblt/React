import React, {Component} from "react";
import User from "./User";

class Users extends Component {

    render () {
            const {users,deleteUser} = this.props;

        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            const {id,name,email} = user;

                            return <User 
                                key = {id}
                                id = {id}
                                name = {name}
                                email= {email}
                                deleteUser = {deleteUser}
                            />;
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Users;