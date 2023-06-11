import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NotFoundImg from '../../assets/images/notfound.jpg'


const Item = ({name, price, image}) => {
    return (
        <Card sx={{ width: 280 }} className='mb-6 lg:mx-3'>
        <CardMedia
            sx={{ height: 450 }}
            image={image ? image : NotFoundImg}
        />
        <CardContent>
            <h5 className='text-red-950 font-bold text-2xl'>{name}</h5>
            <h6 className='italic text-red-400'>{price}</h6>
        </CardContent>
        </Card>
    )
}

export default Item