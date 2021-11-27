//controlador de rutas
exports.getData = (req, res) =>{
res.json({
    "name": "Chevrolet Onix Joy",
    "description": "Potenciá tu actitud con Onix Joy que, además de destacarse por su diseño juvenil y moderno, te ofrecé una óptima autonomía, un desempeño equilibrado y el máximo confort interior. \u003cbr\u003eYa sea un viaje largo o un simple paseo por la ciudad, el confort es uno de los puntos fuertes del Onix. Esta versión incluye aire acondicionado, asientos tapizados en tela y gran espacio interior que te garantiza el máximo confort.",
    "cost": 13500,
    "currency": "USD",
    "soldCount": 14,
    "category": "Autos",
    "images": [
        "img/prod1.jpg",
        "img/prod1_1.jpg",
        "img/prod1_2.jpg",
        "img/prod1_3.jpg",
        "img/prod1_4.jpg"
    ],
    "relatedProducts": [1, 3]
})

}