import React, { useState } from 'react'
import { Container, Typography, Button, Grid, Card,CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'image', label: 'Image', minWidth: 100 },
    {
      id: 'quantity',
      label: 'Quantity',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b3)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(name, code, a, size) {
    const density = a / size;
    return { name, code, a, size, density };
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];
  
const Products = ({ products, removeProductAdmin }) => {
    const classes = useStyles()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const EmptyCart = () => {
        <Typography variant='subtitble1'>You have no item in your list products, start adding some!</Typography>
    }
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <Card>
                            <CardMedia image={item.image} alt={item.name} className={classes.media} />
                            <CardContent className={classes.cardContent}>
                                <Typography variant='h4'>{item.name}</Typography>
                            </CardContent>
                            <CardActions className={classes.Actions}>
                                <div className={classes.buttons}>
                                    <Button type='button' size='small'>-</Button>
                                    <Typography>{item.quantity}</Typography>
                                    <Button type='button' size='small'>+</Button>
                                </div>
                                <Button component={Link} to ={"/product/edit/"+item._id} variant='outlined' type='button' color='primary'>Edit</Button>
                                <Button variant='contained' type='button' color='secondary' onClick={(e) => removeProductAdmin(item._id)}>Remove</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                <div className={classes.cartDetails} >
                    <Typography variant='h4'>Subtotal: </Typography>
                    <div>
                        <Button component={Link} to ='/product/create' className={classes.checkoutButton} size='large' type='button' variant='contained' color='secondary'>Add Product</Button>
                    </div>
                </div>
            </Grid>
        </>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            { products ? <FilledCart /> : <EmptyCart />}
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                </Paper>
        </Container>
    )
}

export default Products
