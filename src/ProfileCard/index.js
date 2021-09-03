import React from "react";
import styles from "./syles";

const ProfileCard = ({ firstName, lastName, email, picture }) => {
  console.log(picture)
  return (
    <div style={styles.container}>
      <img src={picture} alt="dp" style={styles.dp} />
      <div>
        <div>
          {firstName} {lastName}
        </div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
