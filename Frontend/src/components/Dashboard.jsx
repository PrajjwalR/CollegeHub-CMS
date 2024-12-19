import React, { useEffect, useState } from 'react';
import { fetchDashboard } from '../../services/api';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const data = await fetchDashboard();
        setMessage(data.message);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      }
    };

    getDashboardData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
