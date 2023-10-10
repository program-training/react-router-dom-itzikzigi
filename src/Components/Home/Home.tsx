import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);
  return (
    <Box>
      <Button onClick={() => navigateTo("/user")}>Users</Button>
      <Button onClick={() => navigateTo("/products")}>Products</Button>
    </Box>
  );
};
export default Home;
