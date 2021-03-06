import React from 'react';
import { Button } from '@material-ui/core'
import ToggleButton from './toggleButton'
import { Grid } from '@material-ui/core'
const Sort = () => {
    return ( 
        <Grid container justify="space-between" alignItems="center" >
            <Grid item>
                Ưu tiên xem:
                <Button>MỚI NHẤT</Button>
                <Button>XEM NHIỀU</Button>
                <Button>TĂNG DẦN</Button>
                <Button>GIẢM DẦN</Button>
                <Button>TÊN A-Z</Button>
            </Grid>
            <Grid item>
                <ToggleButton />
            </Grid>
            
        </Grid>
     );
}
 
export default Sort;