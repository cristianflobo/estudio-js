import React from 'react';

export default function  Form() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <form>
    <div>
      <label>Username:</label>
      <input type="text" name="username" value={username}  />
    </div>
    <div>
      <label>Password:</label>
      <input type="text" name="username" />
    </div>
    <div>
     <button>Submit</button>
    </div>
  </form>
  )
}
