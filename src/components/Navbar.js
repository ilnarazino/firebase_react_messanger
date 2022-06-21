import { AppBar, Grid, Toolbar, Button } from "@mui/material";
import React from "react";

const Navbar = () => {
    const user = true
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button variant={"outlined"}>Выход</Button>
                        :
                        <Button variant={"outlined"}>Логин</Button>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;