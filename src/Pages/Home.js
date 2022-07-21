import React, { useEffect, useState } from 'react'
import { CircularProgress, Container, Grid, Stack } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { apiHandle } from '../api/apiHandle';

export const Home = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {

        apiHandle().get('?offset=0&limit=20').then((res) => {
            setAllProducts(res.data)
        })

    }, [])


    return (
        <Container maxWidth='xl' style={{ marginTop: '30px' }} >

            {allProducts.length ? <Grid container alignItems='center' spacing={2}>
                {allProducts.map((product,ind)=><ProductCard  data={product} key={ind}/>)}
            </Grid>


                : <Stack direction='row' alignitems='center' justifyContent='center' >
                    <CircularProgress />
                </Stack>
            }


        </Container>
    )
}
