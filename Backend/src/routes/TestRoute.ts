import { NextFunction, Request, Response, Router } from 'express';

class ExampleController{
    defaultMethod(){
        return{
            text: "Hello"
        };
    }
}

export class ExampleRouter{
    router: Router;
    controller: ExampleController;

    constructor(){
        const router = Router();
        const controller = new ExampleController();
        router.get('/', (req: Request, res: Response, next: NextFunction) =>{
            res.status(200).json(controller.defaultMethod());
        });
    }
}