//controlador de rutas
exports.getData = (req, res) =>{
res.json({
    "articles": [
        {
            "name": "Pino de olor para el auto",
            "count": 2,
            "unitCost": 100,
            "currency": "UYU",
            "src": "img/tree1.jpg"
        },
		{
            "name": "Suzuki Celerio",
            "count": 1,
            "unitCost": 12500,
            "currency": "USD",
            "src": "img/prod3.jpg"
        }
    ]
})

}