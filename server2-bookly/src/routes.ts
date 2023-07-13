import { Router, Request, Response } from 'express';
import * as bodyParser from 'body-parser';


export const routes = Router();

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));

routes.get('/services', (req: Request, res: Response, next) => {

    let services = {
        service1: {
            name: 'mens haircut',
            price: 2000
        },
        service2: {
            name: 'womens haircut',
            price: 8000
        }
    };

    res.send(services);
    
})
