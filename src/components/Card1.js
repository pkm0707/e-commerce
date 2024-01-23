import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const data = [
  {
    image: "",
    rating: 5,
    name: "g92-2-500x500",
    price: "120",
    liked: 88,
  },
  {
    image: "",
    rating: 5,
    name: "g92-2-500x500",
    price: "120",
    liked: 88,
  },
  {
    image: "",
    rating: 5,
    name: "g92-2-500x500",
    price: "120",
    liked: 88,
  },
  {
    image: "",
    rating: 5,
    name: "g92-2-500x500",
    price: "120",
    liked: 88,
  },
];
export function Cardmain() {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {data.map((details, index) => {
        <Cardtop name={details.name} key={index} price={details.price} rating={details.rating} liked={details.liked} image={details.image}/>;
      })}
    </div>
  );
}

function Cardtop({ name,price,rating,liked}) {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="./image/g92-2-500x500.png"
            alt="joystick"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating name="read-only" value={rating} readOnly />
              <span>{liked}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
