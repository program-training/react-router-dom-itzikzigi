import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { useNavigate } from "react-router-dom";

const Cards = (product: ProductInterface) => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);
  return (
    <Card
      sx={{ maxWidth: 345, margin: "20px" }}
      onClick={(e) => navigateTo(`/product/${e.currentTarget.id}`)}
      id={product.id.toString()}
      key={product.id}
    >
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={product.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography position={"revert-layer"}>
          Price: {product.price}$
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Cards;
