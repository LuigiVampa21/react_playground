import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import { UserList } from './components/Users/UserList';

const App = () => {

  const [users, setUsers] = useState([
    {
      name: "ntn",
      age: 19,
      date: Date.now()
    }
  ]);

  const addUserHandler = user => {
    setUsers((prevState) => {
      return [...prevState, user]
    }
    )
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
