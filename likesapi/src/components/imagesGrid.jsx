import React from "react";
import { Grid } from '@mui/material';
import ImageWithLikes from "./imageWithLikes";

var ImagesGrid = ({images}) => {
    return (
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {images.map(image => 
                    <Grid item xs={12} sm={6} md={4} lg={3} key={image['id']}>
                        <ImageWithLikes image={image}/> 
                     </Grid>
                )}
            </Grid>


    )
}

export default ImagesGrid