import React from 'react';
import Slider from 'react-slick';
import './Aquasel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import a1 from '../assets/images/a1.webp';
import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import selimgc1 from '../assets/images/selimgc1.jpeg';
import selimgc2 from '../assets/images/selimgc2.jpeg';
import selimgc3 from '../assets/images/selimgc3.jpeg';
import StarRatings from 'react-star-ratings';
const Aquasel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  const books = [
    { id: 1, title: 'Sprinkles and Skeletons', author: 'Leena Clover', amount: '₹100/hr', imgSrc: selimgc1, rating: 4.5 },
    { id: 2, title: 'Daniel Hudson', author: 'Jesse Storm', amount: '₹100/hr', imgSrc: selimgc3, rating: 4.0 },
    { id: 3, title: 'My Sugar in Sugar Land', author: 'Dee Osah', amount: '₹100/hr', imgSrc: selimgc2, rating: 4.2 },
    { id: 4, title: 'The Moss Dragon of Brittlekeep', author: 'Ashley Capes', amount: '₹100/hr', imgSrc: selimgc1, rating: 4.7 },
    { id: 5, title: 'A Match Made in Hell', author: 'Traci Lovelot', amount: '₹100/hr', imgSrc: selimgc3, rating: 4.3 },
    { id: 6, title: 'Vampires and Villains', author: 'Elizabeth Pantley', amount: '₹100/hr', imgSrc: selimgc2, rating: 4.8 },
  ];

  const genres = [
    { name: 'ROMANCE', imgSrc: home1 },
    { name: 'ACTION & ADVENTURE', imgSrc: home2 },
    { name: 'MYSTERY & THRILLER', imgSrc: home3 },
    { name: 'BIOGRAPHIES & HISTORY', imgSrc: home1 },
    { name: 'CHILDREN\'S', imgSrc: home2 },
    { name: 'YOUNG ADULT', imgSrc: home3 },
    { name: 'FANTASY', imgSrc: home1 },
    { name: 'HISTORICAL FICTION', imgSrc: home2 },
    { name: 'HORROR', imgSrc: home3 },
    { name: 'LITERARY FICTION', imgSrc: home1 },
    { name: 'NON-FICTION', imgSrc: home2 },
    { name: 'SCIENCE FICTION', imgSrc: home3 }
  ];

  return (
    <div className="home-i">
      <section className="recommended">
        <h2>Recommended</h2>
        <Slider {...settings}>
          {books.map(book => (
            <div className="book-card-container" key={book.id}>
              <div className="book-card">
                <img src={book.imgSrc} alt={book.title} />
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
                <p className="book-amount">{book.amount}</p>
                <div className="book-rating">
                <StarRatings
                    rating={book.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                    name='rating'
                  />
                </div>
                <Link to={'/time'}>
                  <button className="view-button">View</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="categories">
        <h2>Browse Genres</h2>
        <div className="genre-cards">
          {genres.map((genre, index) => (
            <div className="genre-card" key={index}>
              <img src={genre.imgSrc} alt={genre.name} />
              <div className="genre-name">{genre.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aquasel;
