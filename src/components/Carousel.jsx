import { React, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/home.css';

function CarouselPricipal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container col-12 mt-5 bg-black">
      <Carousel activeIndex={index} className="w-90 mt-2" onSelect={handleSelect} style={{ minHeight: '300px' }}>
        <Carousel.Item style={{ minHeight: '300px' }}>
          <div className="container bg-black mb-5">
            <div className="card-body">
              <div className="container col-3">
                <img src="/IMG/logo-Nav.png" className="rounded" alt="..." />
              </div>
            </div>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ minHeight: '300px' }}>
          <div className="container bg-black mb-5">
            <div className="card-body">
              <div className="container col-3">
                <img src="/IMG/logo-Nav.png" className="rounded" alt="..." />
              </div>
            </div>
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ minHeight: '300px' }}>
          <div className="container bg-black mb-5">
            <div className="card-body">
              <div className="container col-3">
                <img src="/IMG/logo-Nav.png" className="rounded" alt="..." />
              </div>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPricipal;
