import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [word, setword] = useState("");
  const [url, seturl] = useState("");
  const [details, setdetails] = useState("");

  useEffect(() => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setdetails(data));
  });
  function getData() {
    seturl(word);
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <input
            type="text"
            className="input"
            placeholder="Enter your User Name"
            onChange={(e) => {
              setword("https://api.github.com/users/" + e?.target.value);
            }}
          />
          <button onClick={getData}>Get Data</button>
          <div>
            <img src={details.avatar_url} alt="" width={100 + "px"} />
            <li>Login: {details.login}</li>
            <li>Id: {details.id}</li>
            <li>Public repo: {details.public_repos}</li>
            <li>Public gists: {details.public_gists}</li>
            <li>Followers: {details.followers}</li>
            <li>Following: {details.following}</li>
            <li>Created at: {details.created_at}</li>
          </div>
        </div>
      </div>
    </>
  );
}
