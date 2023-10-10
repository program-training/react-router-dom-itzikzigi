import { Box, Divider, List, ListItem } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { UseTodo } from "../TodoContext";
import { useParams } from "react-router-dom";
import { TodoInterface } from "../../interfaces/TodoInterface";

const TodoDetails = () => {
  const { id } = useParams();
  const { todo } = UseTodo();
  const currentTodo = todo?.find((item) => item.id === Number(id));
  const { completed, title } = currentTodo as TodoInterface;
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <ListItem>Task: {title}</ListItem>
        <Divider />
        <ListItem>ID: {id}</ListItem>
        <Divider />
        <ListItem>
          Completed:
          {completed ? <CheckCircleOutlineIcon /> : <HighlightOffIcon />}
        </ListItem>
      </List>
    </Box>
  );
};
export default TodoDetails;
