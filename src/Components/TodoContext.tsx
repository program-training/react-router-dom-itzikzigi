import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";
import { TodoInterface } from "../interfaces/TodoInterface";

type ContextValue = {
  todo: TodoInterface[] | null;
  setTodo: Dispatch<SetStateAction<TodoInterface[] | null>>;
};

const TodoContext = createContext<null | ContextValue>(null);
const { Provider } = TodoContext;

type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todo, setTodo] = useState<TodoInterface[] | null>(null);

  return <Provider value={{ todo, setTodo }}>{children}</Provider>;
};

export const UseTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within a TodoProvider");
  return context;
};

export default TodoProvider;
