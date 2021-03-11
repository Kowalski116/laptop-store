import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import {useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FormInput from './CustomTextField'
const AddressForm = () => {
    const methods = useForm();
    return (
        <>
            <Typography variant='h6'gutterBottom>Shipping Address</Typography>
            <FormProvider { ...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First Name' />
                        <FormInput name='lastName' label='Last Name' />
                        <FormInput name='address' label='Address' />
                        <FormInput name='city' label='City' />
                        <FormInput name='zip' label='ZIP / Postal Code' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value='' fullWidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value='' fullWidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Option</InputLabel>
                            <Select value='' fullWidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent:'space-between'}}>
                        <Button component={Link} to='/cart' variant='outlined'>Back to Cart</Button>
                        <Button type='submit' color='primary' variant='contained'>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
