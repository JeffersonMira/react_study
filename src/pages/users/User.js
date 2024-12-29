import React, {Component} from "react";
import UserForm from "./UserForm";

class User extends Component {
    render() {
        let list = [
            {
                name: "Jefferson",
                email: "jeff@email.com"
            }, {
                name: "João",
                email: "João@email.com"
            }
        ]

        const integers = [1,2,3];
        // const updatedIntegers = integers.map(function(number){return number +=1}); // old way of js function
        const updatedIntegers = integers.map((number) =>  number +=1); //using arrow functions

        return (
            <div>
                <UserForm></UserForm>
                <table border="1">
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>

                <div>
                    Testing things:
                    {
                        updatedIntegers
                    }

                </div>
            </div>
        );
    }
}

export default User;
