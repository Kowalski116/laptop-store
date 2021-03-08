import React from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProcess, Divider, Button } from '@material-ui/core'

const
const Checkout = () => {
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={0} className={classes.stepper}>
                        {step.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
            </main>
        </>
    )
}

export default Checkout
