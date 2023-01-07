import React, { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = user;

  const [errorMsg,setError]=useState("");

  const [passwordError,setPasswordError]=useState("");

  const [successMsg,setSuccessMsg]=useState("");

  const setUserDetails = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    let error=false;
    let isEmpty=false;

    if (name === "") {
      setError("*All fields are mandatory");
      error=true;
      isEmpty=true;
    }
    if (email === "") {
        setError("*All fields are mandatory");
        error=true;
        isEmpty=true;
    }
    if (password === "") {
        setError("*All fields are mandatory");
        error=true;
        isEmpty=true;
    }
    if (confirmPassword === "") {
      setError("*All fields are mandatory");
      error=true;
      isEmpty=true;
    }
    if(password!==confirmPassword){
        if(!isEmpty){
            setError("");
        }
        setPasswordError("*Password and confirm password does not match");
        error=true;
    }


    if(!error){
        setSuccessMsg("*Successfully signed up");
    }

    if(!error){
        event.target.submit();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input onChange={setUserDetails} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input onChange={setUserDetails} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input onChange={setUserDetails} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <input
            onChange={setUserDetails}
            type="password"
            id="confirmPassword"
          />
        </div>
        <button type="submit">
          <b>Signup</b>
        </button>
      </form>
     <p id="error">{errorMsg}</p>
     <p id="passwordError">{passwordError}</p>
     <p id="success">{successMsg}</p>
    </div>
  );
};

export default Forms;
