import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';

import { getPost } from './actions/post'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import memories from './images/memory.png'
import useStyle from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyle();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPost())
    }, [currentId, dispatch])
    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between"  alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}>

                            </Posts>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}>

                            </Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;