import React from "react";

const Cards = () => {
    const cardData = [
        {
          id: 1,
          title: 'Card 1 Title',
          text: 'Texto de ejemplo para el primer card. Luego lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imgUrl: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1702086315/pexels-oleksandr-p-1172207_d44twf.jpg'
        },
        {
          id: 2,
          title: 'Card 2 Title',
          text: 'Texto de ejemplo para el segundo card. Luego lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imgUrl: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1702086315/pexels-oleksandr-p-1172207_d44twf.jpg'
        },
        {
          id: 3,
          title: 'Card 3 Title',
          text: 'Texto de ejemplo para el tercer card. Luego lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imgUrl: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1702086315/pexels-oleksandr-p-1172207_d44twf.jpg'
        },
        {
          id: 4,
          title: 'Card 4 Title',
          text: 'Texto de ejemplo para el cuarto card. Luego lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imgUrl: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1702086315/pexels-oleksandr-p-1172207_d44twf.jpg'
        }
      ];
    return (
        <div className="container px-3 px-md-0 m-auto">
        <div className="row">
          {cardData.map(card => (
            <div className="col-lg-3 col-md-6 mb-3" key={card.id}>
              <div className="card">
                <img src={card.imgUrl} className="card-img-top" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <p className="card-text text-center">{card.text}</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn btn-primary text-center">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Cards;