import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";

const TodoButton = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);

  return (
    <ListItem>
      <ListItemButton onClick={() => navigateTo(`/user/${id}/todos`)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Todo List" />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoButton;
