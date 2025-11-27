import React, { useState } from "react";
import "./UserProfile.css";
import defaultImg from "../../../assets/chicken.webp"; 

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    fullName: "Ashraful Islam",
    id: "191-15-13654", 
    email: "ashraful@example.com",
    phone: "0 1712 345 678",
    hallName: "Pong Hall", 
    image: defaultImg, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, image: imageUrl });
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        <div className="profile-header">
          <div className="img-container">
            <img src={user.image} alt="Profile" className="profile-img" />
          </div>
          
          <div className="header-info">
            <h2 className="display-name">{user.fullName}</h2>
            
            <label htmlFor="file-upload" className="change-img-btn">
              Change Image
            </label>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              style={{ display: "none" }} 
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="profile-details">
          
          <div className="detail-row">
            <label>Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{user.fullName}</span>
            )}
          </div>

          <div className="detail-row">
            <label>ID</label>
            <span className="value readonly">{user.id} <span className="lock-icon">🔒</span></span>
          </div>

          <div className="detail-row">
            <label>Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{user.email}</span>
            )}
          </div>

          <div className="detail-row">
            <label>Phone Number</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{user.phone}</span>
            )}
          </div>

          <div className="detail-row">
            <label>Hall Name</label>
            <span className="value readonly">{user.hallName} <span className="lock-icon">🔒</span></span>
          </div>

        </div>

        <div className="profile-footer">
          <button 
            className={`action-btn ${isEditing ? "save-btn" : "edit-btn"}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;