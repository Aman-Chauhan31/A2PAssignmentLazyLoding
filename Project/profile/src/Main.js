import React, { useState, useEffect } from "react";
import "./main.css";

const Main = () => {
  const [users, setUsers] = useState([]);

  const base_url = "https://avatars.dicebear.com/api/";
  const sprites = [
    "adventurer/aman.svg",
    "female/aman.svg",
    "bottts/aman.svg",
    "identicon/aman.svg",
    "human/aman.svg",
    "micah/aman.svg",
    "open-peeps/aman.svg",
    "croodles/aman.svg",
    "adventurer-neutral/aman.svg",
    "big-ears/aman.svg",
  ];

  const getUsers = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/Aman-Chauhan31/data/data"
    );
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>List of Users Sample</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={base_url.concat(
                          sprites[Math.floor(Math.random() * sprites.length)]
                        )}
                        alt="/"
                        className="rounded"
                        width="155"
                      />
                    </div>
                    <div className="ml-3 w-50">
                      <h4 className="mb-0 mt-0 textLeft">{curElem.title}</h4>
                      <span className="textLeft">{curElem.body}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
