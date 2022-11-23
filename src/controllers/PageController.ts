import {Request, Response} from 'express';
import {activeMenu} from '../helpers/activeMenu';
import {Pet} from '../models/Pet';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu:activeMenu('all'),
        banner:{
            title:'Todos os animais',
            image:'allanimals.jpg',
        },
        pets:Pet.getAll(),
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu:activeMenu('dog'),
        banner:{
            title:'Cachorros',
            image:'banner_dog.jpg',
        },
        pets:Pet.getFromType('dog')
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu:activeMenu('cat'),
        banner:{
            title:'Gatos',
            image:'banner_cat.jpg',
        },
        pets:Pet.getFromType('cat')
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu:activeMenu('fish'),
        banner:{
            title:'Peixes',
            image:'banner_fish.jpg',
        },
        pets:Pet.getFromType('fish')
    });
}