//controlador de rutas
exports.getData = (req, res) =>{
res.json([
    {
        "name": "Autos",
        "description": "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
        "productCount": "122",
        "imgSrc": "img/cat1.jpg"
    },
    {
        "name": "Juguetes",
        "description": "Encuentra aquí los mejores precios para niños/as de cualquier edad.",
        "productCount": "354",
        "imgSrc": "img/cat2.jpg"
    },
    {
        "name": "Muebles",
        "description": "Muebles antiguos, nuevos y para ser armados por uno mismo.",
        "productCount": "157",
        "imgSrc": "img/cat3.jpg"
    },
    {
        "name": "Herramientas",
        "description": "Herramientas para cualquier tipo de trabajo.",
        "productCount": "452",
        "imgSrc": "img/cat4.jpg"
    },
    {
        "name": "Computadoras",
        "description": "Todo en cuanto a computadoras, para uso de oficina y/o juegos.",
        "productCount": "724",
        "imgSrc": "img/cat5.jpg"
    },
    {
        "name": "Vestimenta",
        "description": "Gran variedad de ropa, nueva y de segunda mano.",
        "productCount": "841",
        "imgSrc": "img/cat6.jpg"
    },
    {
        "name": "Electrodomésticos",
        "description": "Todos los electrodomésticos modernos y de bajo consumo.",
        "productCount": "84",
        "imgSrc": "img/cat7.jpg"
    },
    {
        "name": "Deporte",
        "description": "Toda la variedad de indumentaria para todo tipo de deporte.",
        "productCount": "574",
        "imgSrc": "img/cat8.jpg"
    },
    {
        "name": "Celulares",
        "description": "Celulares de todo tipo para cubrir todas las necesidades.",
        "productCount": "124",
        "imgSrc": "img/cat9.jpg"
    }
]
)

}