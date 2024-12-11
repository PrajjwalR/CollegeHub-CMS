// import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  Paper,
  Grid2,
} from '@mui/material';
// import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add signup logic here
    console.log('Signup form submitted');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid2 container spacing={2} sx={{ mt: 1, maxWidth: '100%' }}>
            <Grid2 xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
              />
            </Grid2>
            <Grid2 xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid2>
            <Grid2 xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid2>
            <Grid2 xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates and promotions via email."
              />
            </Grid2>
          </Grid2>
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid2 container justifyContent="flex-end">
          <Grid2>
            <Link to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
};

export default Signup;
