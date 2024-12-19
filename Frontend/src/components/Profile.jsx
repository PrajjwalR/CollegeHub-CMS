import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../../services/api';
import '../CSS/profile.css'

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data.user);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile');
      }
    };

    getProfileData();
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {profile ? (
        <div>
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
