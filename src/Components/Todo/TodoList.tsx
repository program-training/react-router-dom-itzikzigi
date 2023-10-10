import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { TodoInterface } from "../../interfaces/TodoInterface";
import { getTodo } from "../../dataAccess/GetData";
import { useNavigate, useParams } from "react-router-dom";
import { UseTodo } from "../TodoContext";

const TodoList = () => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);

  const { id } = useParams();
  const { todo, setTodo } = UseTodo();

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getTodo(String(id));
      return setTodo(todos as TodoInterface[]);
    };
    void getTodos();
  });

  return (
    <Box>
      <List>
        {todo &&
          todo.map((item) => (
            <Divider>
              <ListItem
                key={id}
                id={item.id.toString()}
                onClick={(e) => navigateTo(`${e.currentTarget.id}`)}
              >
                <ListItemText>Task: {item.title}</ListItemText>
              </ListItem>
            </Divider>
          ))}
      </List>
    </Box>
  );
};
export default TodoList;
