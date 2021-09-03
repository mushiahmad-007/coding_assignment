import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";

function App() {
  const [profiles, setProfiles] = useState();
  const pullProfiles = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://randomuser.me/api", requestOptions)
      .then((response) =>
        response.json().then((res) => {
          console.log(res);
          const profileData = res.results[0];
          console.log(profileData.picture.large);
          const tempProfiles = profiles ? Array.from(profiles) : [];
          tempProfiles.push({
            firstName: profileData.name.first,
            lastName: profileData.name.last,
            email: profileData.email,
            picture: profileData.picture.large,
          });
          setProfiles(tempProfiles);
        })
      )
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      {profiles?.map((profile, idx) => {
        return (
          <ProfileCard
            key={idx}
            firstName={profile.firstName}
            lastName={profile.lastName}
            email={profile.email}
            picture={profile.picture}
          />
        );
      })}
      <button style={{
        width: 100,
        height: 50,
        fontSize: 16,
        textAlign: 'center',
        margin: 50
      }} onClick={pullProfiles}>Pull</button>
    </div>
  );
}

export default App;
