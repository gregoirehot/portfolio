import { Portfolio } from "../_models/portfolio";

export const PORTFOLIOS: Portfolio[] = [
    {
        id: 1,
        title: 'Projet 1',
        description: 'djaqefgefger',
        images: [
            {
                id: 1,
                label: 'Image 1',
                source: 'http://placehold.it/700x300',
                description: 'Lorem ipsum dolor sit amet',
                visible: true,
                main: true
            },
            {
                id: 2,
                label: 'Image 2',
                source: 'http://placehold.it/350x150',
                visible: true,
                main: false
            }
        ],
        visible: true,
        url: ''
    },
    {
        id: 2,
        title: 'Projet 2',
        description: 'djaqefgefger',
        images: [
            {
                id: 1,
                label: 'Image 1',
                source: 'http://placehold.it/700x300',
                description: 'Lorem ipsum dolor sit amet',
                visible: true,
                main: false
            },
            {
                id: 2,
                label: 'Image 2',
                source: 'http://placehold.it/350x150',
                visible: true,
                main: true
            }
        ],
        visible: true,
        url: ''
    }
]