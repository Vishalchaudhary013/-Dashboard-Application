import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import './UserProfile.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

const UserProfile = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback to mock data
        const mockUser = {
          name: 'John Doe',
          username: 'johndoe',
          email: 'john.doe@example.com',
          phone: '+1-555-1234',
          website: 'johndoe.com',
          company: { name: 'Doe Industries' },
          address: { street: '123 Main St', city: 'Metropolis' }
        };
        setUser(mockUser);
        setLoading(false);
        setError('Could not fetch from API, showing mock data.');
      });
  }, [setUser]);

  if (loading) return <div className="user-profile-container">Loading...</div>;

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {error && <div className="user-profile-container error">{error}</div>}
      <div className="profile-card">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone}</p>
        <p><strong>Website:</strong> {user?.website}</p>
        <p><strong>Company:</strong> {user?.company?.name}</p>
        <p><strong>Address:</strong> {user?.address?.street}, {user?.address?.city}</p>
      </div>
    </div>
  );
};

export default UserProfile;
