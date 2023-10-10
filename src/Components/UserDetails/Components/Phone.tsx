import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const Phone = ({ phone }: { phone: string }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <PhoneIcon />
      </ListItemIcon>
      <ListItemText primary={phone} />
    </ListItem>
  );
};
export default Phone;
