import {Request, Response} from 'express';

import { Pet } from '../models/Pet';
import { activeMenu } from '../helpers/activeMenu';

export const search = (req: Request, res: Response) => {
    if(!req.query.q) {
        res.redirect('/')
    }
    
    res.render('pages/page', {
        menu: activeMenu(''),
        pets:Pet.getFromName(req.query.q as string),
        q: req.query.q
    })
} 