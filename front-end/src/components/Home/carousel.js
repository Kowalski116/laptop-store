import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, CardMedia} from '@material-ui/core'

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

const slider = () => {
    return ( 
        <Carousel>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://laptopchat.vn/wp-content/uploads/2019/10/20190830_155618.jpg"
          title="Contemplative Reptile"
        />
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://laptopchat.vn/wp-content/uploads/2019/10/20190830_155618.jpg"
          title="Contemplative Reptile"
        />
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://laptopchat.vn/wp-content/uploads/2019/10/20190830_155618.jpg"
          title="Contemplative Reptile"
        />  
    </Carousel>
     );
}
 
export default Example;