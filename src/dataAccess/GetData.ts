import axios from "axios";
import { UserInterface } from "../interfaces/UserInterface";
import { TodoInterface } from "../interfaces/TodoInterface";
import { ProductInterface } from "../interfaces/ProductInterface";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODO_URL = "https://jsonplaceholder.typicode.com/todos";
const PRODUCTS_URL = "https://dummyjson.com/products";
export const getAllUsers = async () => {
  try {
    const users = await axios.get(USERS_URL);
    return users.data as UserInterface[];
  } catch (error) {
    return error;
  }
};

export const getTodo = async (id: string) => {
  try {
    const todo = await axios.get(`${TODO_URL}?userId=${id}`);
    return todo.data as TodoInterface;
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  try {
    const productsReq = await axios.get(PRODUCTS_URL);
    return productsReq.data as ProductInterface[];
  } catch (error) {
    return error;
  }
};
