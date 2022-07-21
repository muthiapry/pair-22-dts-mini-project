import { Box } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../config/firebase";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ margin: 10 }}>
      Welcome Pairs! <br />
      Current user: {user.email}
    </Box>
  );
};

export default Home;
