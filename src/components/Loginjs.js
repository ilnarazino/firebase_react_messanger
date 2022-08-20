import { Box, Button, Container, Grid } from "@mui/material";
import React, {useContext} from "react";
import { Countext } from "../index";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Loginjs = () => {
    const {auth,provider} = useContext(Countext)

    const login = async () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // redux action? --> dispatch({ type: SET_USER, user });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
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