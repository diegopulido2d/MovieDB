import React from 'react';
import "./style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NotFoundImg from '../../assets/images/notfound.jpg'


const Item = ({name, price, image}) => {
    return (
        <Card sx={{ width: 280 }}>
        <CardMedia
            sx={{ height: 450 }}
            image={image ? image : NotFoundImg}
        />
        <CardContent>
            <h5>{name}</h5>
            <h6>{price}</h6>
        </CardContent>
        </Card>
    )
}

export default Item