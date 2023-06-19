import alqueriaUrl from '../assets/products/alqueria.png'
import zucaritasUrl from '../assets/products/zucaritas.png'
import miloUrl from '../assets/products/milo.png'
import detoditoUrl from '../assets/products//detodito.png'

export const productsRequestServer = () => {
    // Emulate response server with the products
    const productsInfo = {
        products: [

            [{
                name: 'Alqueria Megalitro',
                price: 1.5,
                description: 'Leche Alquería Megalitro semidescremada',
                url: alqueriaUrl,
                highlight: false,
                sku: 1,
            },
            {
                name: 'Zucaritas',
                price: 2.5,
                description: 'Zucaritas 490g de Kelloggs',
                url: zucaritasUrl,
                highlight: false,
                sku: 2,
            },
            {
                name: 'Milo',
                price: 2.0,
                description: 'Milo 250g Econopack',
                url: miloUrl,
                highlight: false,
                sku: 3,
            },
            {
                name: 'De Todito',
                price: 3.5,
                description: 'Detodito 45g Paketon Sabor BBQ',
                url: detoditoUrl,
                highlight: true,
                sku: 4,
            },],
            [
                {
                    name: 'De Todito',
                    price: 3.5,
                    description: 'Detodito 45g Paketon Sabor BBQ',
                    url: detoditoUrl,
                    highlight: true,
                    sku: 5,
                },
                {
                    name: 'Alqueria Megalitro',
                    price: 1.5,
                    description: 'Leche Alquería Megalitro semidescremada',
                    url: alqueriaUrl,
                    highlight: false,
                    sku: 6,
                },
                {
                    name: 'Milo',
                    price: 2.0,
                    description: 'Milo 250g Econopack',
                    url: miloUrl,
                    highlight: false,
                    sku: 7,
                },
                {
                    name: 'Alqueria Megalitro',
                    price: 1.5,
                    description: 'Leche Alquería Megalitro semidescremada',
                    url: alqueriaUrl,
                    highlight: false,
                    sku: 8,
                },

            ],
            [

                {
                    name: 'Milo',
                    price: 2.0,
                    description: 'Milo 250g Econopack',
                    url: miloUrl,
                    highlight: false,
                    sku: 9,
                },
                {
                    name: 'De Todito',
                    price: 3.5,
                    description: 'Detodito 45g Paketon Sabor BBQ',
                    url: detoditoUrl,
                    highlight: true,
                    sku: 10,
                },
                {
                    name: 'Zucaritas',
                    price: 2.5,
                    description: 'Zucaritas 490g de Kelloggs',
                    url: zucaritasUrl,
                    highlight: false,
                    sku: 11,
                },
                {
                    name: 'Alqueria Megalitro',
                    price: 1.5,
                    description: 'Leche Alquería Megalitro semidescremada',
                    url: alqueriaUrl,
                    highlight: false,
                    sku: 12,
                },]
        ]
    }

    return (productsInfo);
}