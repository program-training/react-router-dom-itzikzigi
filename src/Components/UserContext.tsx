import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";
import { UserInterface } from "../interfaces/UserInterface";

type ContextValue = {
  users: UserInterface[] | null;
  setUsers: Dispatch<SetStateAction<UserInterface[] | null>>;
};

const UserContext = createContext<null | ContextValue>(null);
const { Provider } = UserContext;

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<UserInterface[] | null>(null);

  return <Provider value={{ users, setUsers }}>{children}</Provider>;
};

export const UseUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a userProvider");
  return context;
};

export default UserProvider;
