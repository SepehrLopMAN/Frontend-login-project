import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { loginAuth } from "../services/authService";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const errorTimeout = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginAuth(username, password);
      console.log("Logged in user:", user);
      setError(-1);
    } catch (err) {
      setError(`${err.response.data.message}!`);
    }
    if (errorTimeout.current !== null) clearTimeout(errorTimeout.current);

    errorTimeout.current = setTimeout(() => {
      setError(null);
      clearTimeout(errorTimeout.current);
    }, 3500);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: "white",
        mx: "20px",
      }}
    >
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{ padding: "16px", flexGrow: 1 }}
      >
        <Typography
          component="h1"
          variant="h4"
          color="primary.main"
          sx={{ fontWeight: 600 }}
        >
          Login
        </Typography>
        <Box sx={{ my: "32px" }}>
          <TextField
            // DummyJson does not accept Email, Instead Username has been used!
            type="text"
            label="Username"
            focused
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
          />
        </Box>
        <Box sx={{ my: "32px" }}>
          <TextField
            type="password"
            label="password"
            focused
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}>
          <Button variant="outlined" type="button">
            Cancel
          </Button>
          <Button variant="contained" type="submit" sx={{ border: "4px" }}>
            Login
          </Button>
        </Box>
        {error && (
          <Alert
            variant="filled"
            severity={error === -1 ? "success" : "error"}
            sx={{ mt: "16px" }}
          >
            {error === -1 ? "Welcome!" : error}
          </Alert>
        )}
      </FormControl>
    </Container>
  );
}

export default LoginForm;
