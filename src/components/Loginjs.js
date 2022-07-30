import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
//import { Countext } from "../index";
import  firebase  from "firebase";

const Loginjs =  () => {
    //const {auth} = useContext(Countext)

    const login = async()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await firebase.auth().signInWithPopup(provider);
        console.log(user)
    }
    return (
        <Container>
            <Grid container

                style={{ height: window.innerHeight - 150 }}
                alignItems={"center"}
                justifyContent="center"
            >
                <Grid style={{ width: 400, background: 'lightgray' }}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Loginjs;