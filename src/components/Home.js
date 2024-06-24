import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import custom styles

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room ID generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both fields are required");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
    toast.success("Room created");
  };

  // when enter then also join
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg p-4 border-0 rounded-3 bg-dark text-light">
        <div className="card-body text-center">
          <img
            src="/images/codecast.png"
            alt="Logo"
            className="img-fluid mx-auto d-block mb-4 logo"
          />
          <h4 className="card-title mb-4">Enter the Room ID</h4>
          <div className="form-group mb-3">
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="form-control input-field"
              placeholder="ROOM ID"
              onKeyUp={handleInputEnter}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control input-field"
              placeholder="USERNAME"
              onKeyUp={handleInputEnter}
            />
          </div>
          <button
            onClick={joinRoom}
            className="btn btn-success btn-lg w-100 mb-3 join-btn"
          >
            JOIN ROOM
          </button>
          <p className="mt-3">
            Don't have a room ID?{" "}
            <span
              onClick={generateRoomId}
              className="text-success create-room"
            >
              Create New Room
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
