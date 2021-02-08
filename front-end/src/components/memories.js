import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './Posts/Posts'
import Form from './Form/Form'
import memories from '../image/memories.png'
import Styles from '../styles'
const memoriesPage = () => {
    const classes = Styles();
    return(
        <Container className = {classes.container} maxWidth = "lg">
            <AppBar className = {classes.appBar} position="static" color = "inherit">
                <Typography className = {classes.heading} variant = "h2" align = "center">Memories</Typography>
                    <img className = {classes.image} src = {memories} alt = "memories" height = "60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default memoriesPage;