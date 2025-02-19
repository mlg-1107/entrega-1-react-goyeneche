


const products = [
    {
        "id": 1,
        "name": "Válvula inversora calor",
        "price": 53000,
        "img": "https://www.repuestoscimer.com.ar/images/productos/1624558088D_NQ_NP_897183-MLA27866494638_072018-O-removebg-preview.png",
        "category": "Aire Acondicionado",
        "description": "Válvula inversonar calor 4 Vías Split Hasta 6500 F 3/8 Y 5/8",
        "stock": 15
    },
    {
        "id": 2,
        "name": "Evaporadora New San", 
        "price":130000,
        "img": "https://www.repuestosrefrigeracion.com.ar/img/articulos/00000867_1.jpg",
        "category": "Aire Acondicionado",
        "description": "Evaporadora 6.0KW New San",
        "stock": 15
    },
    {
        "id": 3,
        "name":"Motor para condensador", 
        "price":200000,
        "img": "https://media.nidux.net/pull/800/599/10635/909-product-5e471a35f0f20-13310-1.jpg",
        "category": "Aire Acondicionado",
        "description": "Motor para condensador",
        "stock": 15
    },
    {
        "id": 4,
        "name":"Tarjeta universal para mini split", 
        "price": 50000,
        "img": "https://www.refrimundo.com/products/916/tarjeta-universal-para-mini-split-display",
        "category": "Aire Acondicionado",
        "description": "Tarjeta universal para mini split display",
        "stock": 15
    },
    {
        "id": 5,
        "name": "Tubería de cobre",
        "price":15000,
        "img": "https://media.nidux.net/pull/800/599/10635/1092-product-5e4d66ae1e293-20243-1.jpg",
        "category": "Aire Acondicionado",
        "description": "Tubería flexible de cobre",
        "stock": 15

    },
    {
        "id": 6,
        "name": "Kit de carga R-410",
        "price": 61000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_620126-MLA31094923231_062019-F.webp",
        "category": "Kits de carga",
        "description": "Kit de carga R-410 + Mamifold + Mangueras",
        "stock": 15
    },
    {
        "id": 7,
        "name": "Gas Freon 410a garrafa",
        "price": 131000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_672731-MLA81923083916_012025-F.webp",
        "category": "Kits de carga",
        "description": "Gas Freon 410a Necton garrafa x5.6kg Aire Acondicionado",
        "stock": 15
    },
    {
        "id": 8,
        "name": "Plaqueta Gafa 7500",
        "price": 50000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_832736-MLA45227460409_032021-F.webp",
        "category": "Lavarropas",
        "description": "Plaqueta Gafa 7500 Acquarius Fuzzy Logic Nacional",
        "stock": 15
    },
    {
        "id": 9,
        "name": "Blocapuerta Samsung WF",
        "price": 30000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_798674-MLA46901100518_072021-F.webp",
        "category": "Lavarropas",
        "description": "Blocapuerta Lavarropas Samsung WF 1702 1804 1904 8650",
        "stock": 15
    },
    {
        "id": 10,
        "name": "Manguera de carga 1.5 mts",
        "price": 6000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_603547-MLA49856235227_052022-F.webp",
        "category": "Lavarropas",
        "description": "Manguera de carga 1.5 mts compatible con Drean Blue Next",
        "stock": 15
    },
    {
        "id": 11,
        "name": "Eje tambor sólo lavarropas",
        "price": 46000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_783266-MLA31054766812_062019-F.webp",
        "category": "Lavarropas",
        "description": "Eje soporte tambor sólo lavarropas Bosch Europa Euro 600",
        "stock": 15
    },
    {
        "id": 12,
        "name": "Juego agitador lavarropas Longvie",
        "price": 13000,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_904066-MLA75308955146_032024-F.webp",
        "category": "Lavarropas",
        "description": "Juego agitador x3 Lavarropas Longvie L8012 L8010 L6510 L6508",
        "stock": 15
    }
];



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
    }

    export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId));
            }, 500)
        })
    }

    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.filter(prod=>prod.category === categoryId));
            }, 500)
        })
    }
