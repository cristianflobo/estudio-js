import React, { useState } from "react";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  
  return errors;
}

export default function Form() {
  //console.log(errors);
  //const [username, setUsername] = React.useState('')
  const [errors, setError] = useState({});

  const [input, setInput] = useState({
    username: "",
    password: "",
    
  });
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      prueba:"hola"
    });
    let errors = validate({ ...input, [e.target.name]: e.target.value });
    setError(errors);
  };

  const enviarDatos = (e) => {
    e.preventDefault();

    console.log(input.username + " " + input.password);
  };

  return (
    <form onSubmit={enviarDatos}>
      <div>
        <label>Username:</label>
        <input
          placeholder="Nomrbre de usuario"
          type={"text"}
          name="username"
          onChange={handleInputChange}
          value={input.username}
          size={20}
          className={errors.username && "danger"}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          placeholder="Password"
          type="Password"
          name="password"
          onChange={handleInputChange}
          value={input.password}
          size={10}
          className={errors.password && "danger"}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <div>
        <button disabled = {input.username === '' || input.password === '' }>Submit</button>
        <button disabled = {validate.username !== 'Username is invalid' }>Submit2</button>
      </div>
    </form>
  );
}
