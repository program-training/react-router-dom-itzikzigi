import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Email = ({ email }: { email: string }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <EmailIcon />
      </ListItemIcon>
      <ListItemText primary={email} />
    </ListItem>
  );
};
export default Email;
