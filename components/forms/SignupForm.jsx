"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Link,
} from "@mui/material";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordMatch = password === confirmPassword;

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMatch) {
      console.log("Signup form Data: ", {
        email,
        password,
        confirmPassword,
      });
    } else {
      alert("Passwords do not match");
    }

    resetForm();
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="/login" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          style={{ marginTop: "20px" }}
        >
          Continue with Google
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
