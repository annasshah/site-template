import { Grid, Stack, Typography, Button, Paper, CircularProgress, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { apiHandle } from '../api/apiHandle';
import { useParams,useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';






export const ProductDetails = () => {

    const params = useParams()
    const navigate = useNavigate()

    console.log(params)


    const [cartCount, setCartCount] = useState(0)
    const [productData, setProductData] = useState(null)
    const [renderImage, setrenderImage] = useState(0)



    useEffect(() => {
        setProductData(null)
        apiHandle().get(`/${params.id}`).then((res) => {
            setProductData(res.data)
        })
    }, [])


    const renderImageHandle = (i) => {
        setrenderImage(i)
    }
    


   
    



    return (
        <Container maxWidth='xl' style={{ marginTop: '30px' }} >

            <Button sx={{ marginTop: 5 }} variant='text' onClick={()=>navigate('/')} startIcon={<ArrowBackIcon />} >Back to Home</Button>
            {
                productData ? <Grid container spacing={3} sx={{ marginTop: 10 }}>

                     <Grid item xs={12} sm={12} md={6} lg={5} xl={5}  >
                        <Stack>
                            <img src={productData.images[renderImage]} width='100%' />
                        </Stack>


                        <Stack direction='row' spacing={2} sx={{ marginTop: '15px' }}>

                            {productData.images.map((image, index)=>{
                               return <Stack sx={{border:'3px solid red',borderStyle:renderImage === index ? 'solid': 'none'}} onClick={()=>renderImageHandle(index)} key={index}>
                                    <img src={image} width='100%' />
                                </Stack>
                            })}
                        </Stack>
                    </Grid>



                    <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>

                        <Stack spacing={4}>
                            <Typography variant='h3'>
                                {productData.title}
                            </Typography>
                            <Typography color='gray'>
                                {productData.description}
                            </Typography>
                            <Typography variant='h4' color='red'>
                                ${productData.price}
                            </Typography>

                            <Stack direction='row' spacing={3}>
                                
                                <Paper elevation={0} variant='outlined' sx={{ width: '120px', py: '10px' }}>
                                    
                                    <Stack justifyContent='space-around' alignItems='center' direction='row' sx={{ width: '100%', height: '100%' }}>
                                        <button onClick={() => setCartCount(cartCount - 1)} disabled={cartCount === 0} style={{ all: 'unset', fontWeight: 'bold', fontSize: '20px', pointerEvents: 'all', cursor: 'pointer', color: cartCount === 0 ? 'lightgray' : 'black' }}>-</button>


                                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{cartCount}</Typography>
                                        <button onClick={() => setCartCount(cartCount + 1)} style={{ all: 'unset', fontWeight: 'bold', fontSize: '20px', pointerEvents: 'all', cursor: 'pointer' }}>+</button>

                                    </Stack></Paper>




                                <Button variant='outlined' sx={{ paddingX: '30px' }} color="warning">Add to Cart</Button>
                            </Stack>
                        </Stack>
                    </Grid>

                </Grid> : <Stack direction='row' alignitems='center' justifyContent='center' >
                    <CircularProgress />
                </Stack>
            }</Container>
    )
}











