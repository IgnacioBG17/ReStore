import { Card, CardMedia, CardContent, Typography, Button, CardActions, CardHeader, Avatar } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/products";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {

    const { id, name, pictureUrl, price, brand, type } = product;

    return(
        <>
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar sx={{bgcolor: 'secondary.main'}}>
                            { name.charAt(0).toUpperCase() }
                        </Avatar>
                    }
                    title= {name}
                    titleTypographyProps={{
                        sx: {fontWeight: 'bold', color: 'primary.main'}
                    }}
                />
                <CardMedia
                    sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
                    image={pictureUrl}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom  color='secondary' variant="h5">
                        ${(price / 100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {brand} / {type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
             </Card>
        </>
    )
}