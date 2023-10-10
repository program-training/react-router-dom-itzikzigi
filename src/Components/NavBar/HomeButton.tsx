import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const HomeButton = () => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);
  return (
    <Button onClick={() => navigateTo("/")}>
      <HomeIcon />
    </Button>
  );
};
export default HomeButton;
