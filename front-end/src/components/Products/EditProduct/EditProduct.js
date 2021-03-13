import React,{ useState } from 'react'
import { Paper, Button, Grid, Typography, TextField } from '@material-ui/core'
import {useForm, FormProvider } from 'react-hook-form'
import { useFormContext, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FileBase from 'react-file-base64'
import useStyles from './styles'

const CreateProduct = ( { product } ) => {
    const methods = useForm();
    const classes = useStyles();
    const control = useFormContext();
    const { handleSubmit, errors, formState } = useForm();
    const [image, setImage] = useState('')
    const onSubmit =  data => {
       axios.post('product/add',{...data,image:image})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
      };
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4'gutterBottom>Create product</Typography>
                    <br />
                    <FormProvider { ...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} >
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        fullWidth
                                        name='name'
                                        label='Name Product'
                                        required
                                        defaultValue={product.name}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        fullWidth
                                        name='description'
                                        label='Description'
                                        required
                                        defaultValue={product.description}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        fullWidth
                                        name='quantity'
                                        label='Quantity'
                                        required
                                        defaultValue={product.quantity}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        fullWidth
                                        name='price'
                                        label='Price'
                                        required
                                        defaultValue={product.price}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                <Controller
                                        as={FileBase}
                                        control={control}
                                        fullWidth
                                        name='image'
                                        label='Image'
                                        required
                                        onDone={({base64}) => setImage(base64)}
                                        defaultValue={product.image}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <div style={{ display: 'flex', justifyContent:'flex-end'}}>
                                <Button type='submit' color='primary' variant='contained' onClick={onSubmit}>Create</Button>
                            </div>
                        </form>
                    </FormProvider>
                </Paper>
            </main>
        </>
    )
}

export default CreateProduct
