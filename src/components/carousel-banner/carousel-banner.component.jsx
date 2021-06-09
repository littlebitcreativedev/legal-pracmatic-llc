import * as React from 'react';
import { Carousel } from 'react-bootstrap';

// material ui components
import Container from '@material-ui/core/Container';

// components
import CustomButton from '../custom-button/custom-button.component';

// styles
import './carousel-banner.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselBanner = ({ intl }) => (
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
          <h1 className="carousel-heading">{intl.formatMessage({ id: 'carousel-banner.slide1-heading' })}</h1>
          <h4 className="carousel-subheading">
          {intl.formatMessage({ id: 'carousel-banner.slide1-subheading' })}
          </h4>
          <CustomButton routeName="/services/translations" linkName={intl.formatMessage({ id: 'learn-more' })} />
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
        <Container>
          <h1 className="carousel-heading">{intl.formatMessage({ id: 'carousel-banner.slide2-heading' })}</h1>
          <h4 className="carousel-subheading">
          {intl.formatMessage({ id: 'carousel-banner.slide2-subheading' })}
          </h4>
          <CustomButton routeName="/services" linkName={intl.formatMessage({ id: 'learn-more' })} />
        </Container>
      </div>
    </Carousel.Item>
  </Carousel>
);

export default CarouselBanner;
