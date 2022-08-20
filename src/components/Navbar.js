import { AppBar, Grid, Toolbar, Button } from "@mui/material";
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Countext } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const { auth } = useContext(Countext);
    const [user] = useAuthState(auth);

    const signOutClick = () => {
        signOut(auth)
            .then(() => {
                console.log('logged out');
                //navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant="dense">
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button onClick={signOutClick}
                            variant={"outlined"}>Выход</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;