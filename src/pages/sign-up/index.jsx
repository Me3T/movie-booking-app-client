import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";
import { useState } from "react";
import { useMemo } from "react";
import { useLoggedInUser, useSignup } from "../../hooks/auth.hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: signupAsync } = useSignup();
  const { data: loggedInUser } = useLoggedInUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (loggedInUser) navigate("/dashboard");
  }, [loggedInUser, navigate]);

  const isConfirmPasswordMatch = useMemo(
    () => password === confirmPassword || confirmPassword === "",
    [confirmPassword, password]
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isConfirmPasswordMatch) return;

    await signupAsync({ firstName, lastName, email, password });
  };

  return (
    <div className="signup-page-container">
      <div>
        <Typography variant="h3">Sign Up</Typography>
        <Box component="form" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              required
            />
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
            />
          </div>
          <div className="form-row">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="Email"
              type="email"
              required
            />
          </div>
          <div className="form-row">
            <TextField
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              required
            />
          </div>
          <div className="form-row">
            <TextField
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!isConfirmPasswordMatch}
              helperText={
                !isConfirmPasswordMatch ? "Password does not match" : undefined
              }
              fullWidth
              label="Confirm Password"
              type="password"
              required
            />
          </div>
          <div className="form-row">
            <Button
              type="submit"
              disabled={!isConfirmPasswordMatch}
              fullWidth
              variant="contained"
            >
              Create Account
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignupPage;
