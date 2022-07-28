import { AppBar, Grid, Toolbar, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Navbar = () => {
    const user = true
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant="dense">
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button variant={"outlined"}>Выход</Button>
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