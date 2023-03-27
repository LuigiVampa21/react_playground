import React, { useState } from 'react'

import classes from "./UserList.module.css";

import { Card } from '../UI/Card'

export const UserList = props => {

    return (
        <Card classes={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.age} - {user.date.toString()}
                    </li>
                ))}
            </ul>
        </Card>
    )
}
