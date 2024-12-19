import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', 
  withCredentials: true,            
});

// Function to fetch the protected dashboard data
export const fetchDashboard = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard:', error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch user profile data
export const fetchProfile = async () => {
  try {
    const response = await api.get('/dashboard/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error.response?.data || error.message);
    throw error;
  }
};

export default api;
