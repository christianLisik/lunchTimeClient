

export const menuData = () => {
    return[
        {
            day:'Montag',
            dayIndex: 1,
            menu:[
                {
                    menuName:"M1 Carbonara mit Speck",
                    price:"8.00 EUR",
                    typ:"",
                    ingredients: "Schweinefleisch, Nudeln",
                    hot: false,
                    amount:0,
                    pictureLink: "../assets/carbonara.jpg"

                },
                {
                    menuName:"M2 Pesto vegetarisch",
                    price:"5.50 EUR",
                    typ:"vegan, halal",
                    ingredients: "Brokoli, Karotten, Paprika",
                    hot: false,
                    amount:0,
                    pictureLink: "../assets/pesto.jpg"
                },
                {
                    menuName:"M3 Pfankuchen mit Vanillesoße",
                    price:"3.00 EUR",
                    typ:"vegetarisch, halal",
                    ingredients: "Ei, Vanille, Sahne (30%)",
                    hot: true,
                    amount:0,
                    pictureLink: "../assets/pfankuchen.jpg"
                },
                {
                    menuName:"M4 Chicken Wings paniert",
                    price:"4.00 EUR",
                    typ:"halal",
                    ingredients: "Huhn",
                    hot: true,
                    amount:0,
                    pictureLink: "../assets/chickenwings.jpg"
                },
            ]

        },
        {
            day:'Dienstag',
            dayIndex: 2,
            menu:[
                {
                    menuName:"D1 Roter Curry mit Huhn und Gemüse (scharf)",
                    price:"11.00 EUR",
                    typ:"",
                    ingredients: "Huhn, Paprika, Karotten, Pilze",
                    hot: true,
                    amount:0,
                    pictureLink: "https://cdn.pixabay.com/photo/2020/02/02/15/09/duck-breast-4813264_640.jpg"

                },
                {
                    menuName:"D2 Curry mit Soja und Gemüse",
                    price:"5.50 EUR",
                    typ:"vegan, halal, vegetarisch",
                    ingredients: "Soja, Brokoli, Karotten, Pilze",
                    hot: false,
                    amount:0,
                    pictureLink: 'https://cdn.pixabay.com/photo/2018/08/14/05/49/green-curry-3604721_640.jpg'
                },
                {
                    menuName:"D3 Reispfanne mit Ei und Gemüse",
                    price:"4.80 EUR",
                    typ:"vegetarisch, halal",
                    ingredients: "Ei, Brokoli, Pilze, Karotten",
                    hot: false,
                    amount:0,
                    pictureLink: "https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_640.jpg"
                },
                {
                    menuName:"D4 Frühlingsrollen mit Gemüse",
                    price:"4.00 EUR",
                    typ:"vegan, vegetarisch, halal",
                    ingredients: "Frühlingsteig, Pilze, Sojasprossen",
                    hot: false,
                    amount:0,
                    pictureLink: "https://cdn.pixabay.com/photo/2015/06/15/03/48/gourmet-809866_640.jpg"
                },
                {
                    menuName:"D5 Nudelpfanne mit Ei mit Gemüse",
                    price:"4.50 EUR",
                    typ:"vegan, vegetarisch, halal",
                    ingredients: "Ei, Pilze, Brokoli, Sojasprossen",
                    hot: false,
                    amount:0,
                    pictureLink: "https://cdn.pixabay.com/photo/2019/08/30/09/17/noodles-4440831_640.jpg"
                },
            ]
        }
    ]
}