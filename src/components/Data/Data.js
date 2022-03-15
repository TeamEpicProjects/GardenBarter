const cardList=[
    {
    "id": 1,
    "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
    "name": "Ms Ginny",
    "item": "Potato",
    "quantity": "10kgs",
    "time": "2 days"
    },
    {
      "id": 2,
      "name": "Mr Harry",
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Carrot",
      "quantity": "5kgs",
      "time": "5 days"
    },
    {
      "id": 3,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "name": "Mr Marvel",
      "item": "Peas",
      "quantity": "12kgs",
      "time": "6 days"
    },
    {
    "id": 4,
    "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
    "name": "Mr john",
    "item": "Onion",
    "quantity": "10kgs",
    "time": "9 days"
    },
    {
    "id": 5,
    "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
    "name": "Mr Moris",
    "item": "Green Beans",
    "quantity": "7kgs",
    "time": "12 days"
    },
    {
    "id": 6,
    "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
    "name": "Mr Carry",
    "item": "Ginger",
    "quantity": "7kgs",
    "time": "15 days"
    }
  ]

  const myProducts = [
    {
      "id": 1,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Potato",
      "quantity": "30kgs",
      "time": "2 days"
    },
    {
      "id": 2,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Carrot",
      "quantity": "20kgs",
      "time": "5 days"
    },
    {
      "id": 3,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Peas",
      "quantity": "15kgs",
      "time": "6 days"
    },
    {
      "id": 4,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Peas",
      "quantity": "10kgs",
      "time": "9 days"
    },
    {
      "id": 5,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Kiwi",
      "quantity": "6kgs",
      "time": "10 days"
    },
    {
      "id": 6,
      "photo" : "https://m.media-amazon.com/images/I/710EvtgG++L._SX466_.jpg",
      "item": "Onion",
      "quantity": "4kgs",
      "time": "13 days",
    }
  ]

  const addingProduct = (newProduct)=>{
      myProducts.push(newProduct);
  }

  export {cardList, myProducts, addingProduct};

