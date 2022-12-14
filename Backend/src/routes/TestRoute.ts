import { NextFunction, Request, Response, Router } from 'express';

export const ExampleController = () => {
    function defaultMethod(){
        return{
            text: "Hello"
        };
    }
}

export class ExampleRouter{
    const router = Router();

}