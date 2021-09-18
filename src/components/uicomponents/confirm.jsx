import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function CheckOut() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const {orderNumber}= useSelector((store)=>store.OtherReducer)
    console.log(orderNumber,'=== other reducer')
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ height: '100vh' }}>
                    <Card className={classes.root}>
                        <CardContent>
                            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography> */}
                            <Typography variant="h5" component="h2">
                                {/* be{bull}nev{bull}o{bull}lent */}
                                Your Order has been placed! ! !
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Order No: {orderNumber}
                            </Typography>
                            {/* <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography> */}
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Typography>
            </Container>
        </React.Fragment>
    );
}