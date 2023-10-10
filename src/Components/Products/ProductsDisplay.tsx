import { useEffect, useState } from "react";
import Cards from "./Card";

import { Box, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { getProducts } from "../../dataAccess/GetData";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductInterface[] | null>(null);

  useEffect(() => {
    const getProductsFromServer = async () => {
      try {
        const productsFromServer = await getProducts();
        console.log(productsFromServer);
        setProducts(
          productsFromServer.products as unknown as ProductInterface[]
        );
      } catch (error) {
        return <Navigate to={"*"} />;
      }
    };
    void getProductsFromServer();
  }, []);

  return (
    <Box id="home">
      <Typography variant="h3">Products</Typography>
      {products &&
        products.map((product) => <Cards key={product.id} {...product} />)}
    </Box>
  );
};
export default ProductsPage;
