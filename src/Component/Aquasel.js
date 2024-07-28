import React from 'react';
import Slider from 'react-slick';
import './Aquasel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import home1 from '../assets/images/home1.jpg'; 
import home2 from '../assets/images/home2.jpg'; 
import home3 from '../assets/images/home3.jpg'; 
import selimgc1 from '../assets/images/selimgc1.jpeg';
import selimgc2 from '../assets/images/selimgc2.jpeg';
import selimgc3 from '../assets/images/selimgc3.jpeg';
const Selfturf = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  const books = [
    { id: 1, title: <b>'Sprinkles and Skeletons'</b>, author: <b>'Leena Clover'</b>, imgSrc: selimgc1 },
    { id: 2, title: <b>'Daniel Hudson'</b>, author: <b>'Jesse Storm'</b>, imgSrc: selimgc3 },
    { id: 3, title: <b>'My Sugar in Sugar Land'</b>, author: <b>'Dee Osah'</b>, imgSrc: selimgc2 },
    { id: 4, title: <b>'The Moss Dragon of Brittlekeep'</b>, author: <b>'Ashley Capes'</b>, imgSrc: selimgc1 },
    { id: 5, title: <b>'A Match Made in Hell'</b>, author: <b>'Traci Lovelot'</b>, imgSrc: selimgc3},
    { id: 6, title: <b>'Vampires and Villains'</b>, author: <b>'Elizabeth Pantley'</b>, imgSrc: selimgc2 },
    // Add more books as needed
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
                <button className="go-button">View</button>
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

export default Selfturf;
