import { Router } from 'express';
import { ExampleRouter } from "./TestRoute";

export class PrimaryRouter{
    router: Router;
    exampleRouter: ExampleRouter;

    constructor(){
        const router = Router();
        
        router.use('/test', this.exampleRouter);
    }
};