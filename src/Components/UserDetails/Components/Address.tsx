import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddressInterface } from "../../../interfaces/UserInterface";

const Address = ({ address }: { address: AddressInterface }) => {
  const { city, street, zipcode } = address;
  return (
    <List>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Address" />
        </AccordionSummary>
        <AccordionDetails>
          <ListItemText>City: {city}</ListItemText>
          <ListItemText>Street: {street}</ListItemText>
          <ListItemText>Zip code: {zipcode}</ListItemText>
        </AccordionDetails>
      </Accordion>
    </List>
  );
};
export default Address;
