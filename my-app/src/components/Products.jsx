import React from 'react';
import { Grid } from '@material-ui/core';


const products = [
 { id:1, name: 'Shoes', description: ' Running shoes', Price: '5$' },
 { id:2, name: 'MackBook', description: 'Apple MackBook', Price: '10$' },
];
const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
        {products.map((Product) => (
           <Grid item Key={Product.id} xs={12} sm={6} md={4} lg={3}>
               <Product Product={Product} />
           </Grid>
        ))}
       </Grid>
   </main>
    );

}
export default Products;