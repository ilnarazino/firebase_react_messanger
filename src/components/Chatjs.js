
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Countext } from "../index";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";


const Chatjs = () => {
    const { auth, firestore } = useContext(Countext);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, sendMessag] = useState([]);

    const readMessage = async () => {
        const querySnapshot = await getDocs(collection(firestore, "messages"));
        let message1 = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            message1.push(doc.data());
        });
        sendMessag(message1);
    };

    readMessage();

    /*     const [message, loading] = useCollectionData(
            firestore.collection('messages').orderBy('createdAt')
        ) */

    const sendMessage = async () => {
        debugger;
        await addDoc(collection(firestore, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp()
        });
        setValue('');
    };

    return (
        <Container>
            <Grid container
                justify={"center"}
                style={{ height: window.innerHeight - 50, marginTop: 20 }}>
                <div style={{ width: '80%', height: '60vh', border: '1px solid gray', overflow: 'auto' }}>
                    {messages.map(message =>
                        <div style={{
                            margin: 10,
                            border: user.uid===message.uid?'2px solid green':'2px dashed red',
                            marginLeft: user.uid===message.uid?'auto':'10px',
                            width:'fit-content',
                            padding:5,
                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>)}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{ width: '80%' }}
                >
                    <TextField
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Chatjs;