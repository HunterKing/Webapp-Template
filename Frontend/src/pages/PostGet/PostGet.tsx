import {Button, Form, FormControl, FormGroup} from "react-bootstrap";
import React from "react";
import { useState } from "react";

export const PostGet = () => {
    //This uses useState() which is a React hook.
    //For more information on this, check out:
    //https://reactjs.org/docs/hooks-state.html
    //For more information on hooks generall, check out:
    //https://reactjs.org/docs/hooks-intro.html
    const [postData, setPostData] = useState("");

    function handlePostData(e: any){
        setPostData(e?.target?.value);
        //Check out all of the data that we're sending.
        //WARNING: React will always be one character behind here because the hook will not fire until re-render.
        //For a better representation of the current data, click the POST button.
        console.log(postData);
    };

    function handlePost(){
        console.log("POST pressed!\nPOST data currently is:");
        console.log(postData);

        //Actually do a post;
        // fetch('url', {
        //     method: 'POST',
        //     headers: {
        //         accept: 'application.json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: {},
        //     cache: 'default'
        // });

    };

    function handleGet(){
        console.log("GET pressed!");

        //Actually do a get;
        // fetch('url', {
        //     method: 'GET',
        //     cache: 'default'
        // });
    };

    return(
        <>
            <h3 style={{textAlign: "center"}}>
                This is the POST/GET page!
            </h3>

            { /* For more info on forms, check out: */ }
            { /* https://react-bootstrap.github.io/forms/overview/ */ }
            <Form>
                <FormGroup controlId="formControlsTextarea">
                    <FormControl 
                        type="text"
                        placeholder="Data to POST" 
                        onChange={handlePostData} 
                    />
                </FormGroup>

                <Button onClick={handlePost}>
                    POST
                </Button> 

                <Button onClick={handleGet}>
                    GET
                </Button>
            </Form>
        </>
    );
};