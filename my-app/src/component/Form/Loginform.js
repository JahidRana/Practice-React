import React, { useState } from "react";

const Loginform = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allEntry, setallEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setallEntry([...allEntry, newEntry]);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div>
        {allEntry.map((currElem) => {
          return (
            <div>
              <p>{currElem.email}</p>
              <p>{currElem.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loginform;
