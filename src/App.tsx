import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { UseUser } from "./Components/UserContext";
import { getAllUsers } from "./dataAccess/GetData";
import { UserInterface } from "./interfaces/UserInterface";
import { Box } from "@mui/material";
import AllUsersPage from "./Pages/AllUsersPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import TodosPage from "./Pages/TodosPage";
import TodoDetailsPage from "./Pages/TodoDetailsPage";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProductsDisplay from "./Components/Products/ProductsDisplay";

function App() {
  const { setUsers } = UseUser();

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await getAllUsers();
      return setUsers(usersFromServer as UserInterface[]);
    };
    void getUsers();
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsDisplay />} />
        <Route path="/user" element={<AllUsersPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
        <Route path="/user/:id/todos" element={<TodosPage />} />
        <Route path="/user/:id/todos/:id" element={<TodoDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default App;
