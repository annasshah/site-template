import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export const ProductCard = ({ data }) => {
    const { images, title, price,id } = data

    const navigate = useNavigate()

    const viewDetailsHandle = () => {

        navigate(`/product/${id}`)
        
    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Paper elevation={0} variant="outlined" >
                <Box alignItems='center' sx={{ width: '100%', padding: 0 }}>
                    <img src={images[0]} width='100%' />
                </Box>

                <Stack sx={{ marginTop: '10px' }}>
                    <Typography align='center' variant='h6' color='gray'>{title}</Typography>
                    <Typography align='center' variant='h6' color='black'>${price}</Typography>
                </Stack>
                <Stack justifyContent='center' sx={{ marginBottom: '10px' }}>
                    <Button onClick={viewDetailsHandle} variant='text' sx={{ color: 'gray' }}><Typography sx={{ textDecoration: 'underline',fontSize:'15px' }}>View Details</Typography></Button>
                </Stack>


            </Paper>
        </Grid>
    )
}
