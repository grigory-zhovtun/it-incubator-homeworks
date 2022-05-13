import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser = {_id: v1(), name: name}
        users.push(newUser)
        setUsers(users); // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}
