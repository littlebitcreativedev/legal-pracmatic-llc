import * as React from 'react';
import { Carousel } from 'react-bootstrap';

// material ui components
import Container from '@material-ui/core/Container';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles
import './carousel-banner.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SlideOne from '../../assets/books-people-working.svg';
import SlideTwo from '../../assets/woman-man-shaking-hands.svg';

const CarouselBanner = () => (
  <Carousel className="carousel" controls={false}>
    <Carousel.Item className="carousel-item">
      <div
        className="image"
        style={{
          backgroundImage: `url('https://i.ibb.co/j3t63s8/people-books-studying.png')`,
        }}
      />
      <div className="carousel-caption">
        <Container>
          <h1 className="carousel-heading">Translations with a human touch</h1>
          <h4 className="carousel-subheading">
            We offer translations in english and spanish in a practical and simple way
          </h4>
          <CustomButton routeName="/our-service/translations" linkName="Learn more" />
        </Container>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div
        className="image"
        style={{
          backgroundImage: `url('https://i.ibb.co/86pPNxw/woman-man-shaking-hands.png')`,
        }}
      />
      <div className="carousel-caption">
        <h1 className="carousel-heading">Remote and in person legal services</h1>
        <h4 className="carousel-subheading">
          We offer translations in english and spanish in a practical and simple way
        </h4>
        <CustomButton routeName="/our-service/translations" linkName="Learn more" />
      </div>
    </Carousel.Item>
  </Carousel>
);

export default CarouselBanner;
