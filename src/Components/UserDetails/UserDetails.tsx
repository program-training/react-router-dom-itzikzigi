import { Box, List, Divider } from "@mui/material";
import { UserInterface } from "../../interfaces/UserInterface";
import Phone from "./Components/Phone";
import Email from "./Components/Email";
import Address from "./Components/Address";
import TodoButton from "./Components/TodoButton";
import { UseUser } from "../UserContext";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = UseUser();
  const user = users?.find((user) => user.id == Number(id));
  const { address, phone, email } = user as UserInterface;

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <Email email={email} />
        <Divider />
        <Phone phone={phone} />
      </List>
      <Divider />
      <Address address={address} />
      <Divider />
      <TodoButton id={id as string} />
    </Box>
  );
};
export default UserDetails;
