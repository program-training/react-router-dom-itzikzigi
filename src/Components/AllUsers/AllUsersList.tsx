import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { UseUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function AllUsersList() {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);
  const { users } = UseUser();

  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users &&
          users.map((user) => (
            <Divider>
              <ListItem
                key={user.id}
                id={user.id.toString()}
                onClick={(e) => navigateTo(`/user/${e.currentTarget.id}`)}
              >
                <ListItemText primary={user.name} />
              </ListItem>
            </Divider>
          ))}
      </List>
    </Box>
  );
}
