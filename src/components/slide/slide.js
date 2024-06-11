import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../slide/slide.css';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100 h-25' src="https://media.istockphoto.com/id/1076263320/photo/young-couple-in-love-walking-in-the-city.jpg?s=612x612&w=0&k=20&c=yZuK-r9pZ3_TG39jVepBTq7rSGMUkz3DZO3RI8Daqrk=" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 h-50' src="https://c4.wallpaperflare.com/wallpaper/700/750/462/amigas-bolsas-comprado-entretenimiento-wallpaper-preview.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 h-50' src="https://img.freepik.com/free-photo/portrait-happy-lady-sunglasses-standing-with-colorful-shopping-bags-hands-pink-background-young-woman-standing-white-shirt-denim-shorts_574295-1182.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 h-50' src="https://img.freepik.com/premium-photo/cute-little-boy-summer-fashion-clothes-goes-shopping-happy-child-with-shopping-packages-hands_265223-85887.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
