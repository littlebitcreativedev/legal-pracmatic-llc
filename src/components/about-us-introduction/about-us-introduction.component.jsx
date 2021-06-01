import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components

// styles
import './about-us-introduction.styles.scss';

const AboutUsIntroduction = () => (
  <div className="section-introduction">
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <h2>Who we are</h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>
          Harum nisi ipsa ullam. Rerum libero totam saepe commodi occaecati aperiam. Vitae aut
          nostrum cum. Reprehenderit id cum unde cumque. Deleniti ipsam debitis esse.
        </p>
        <p>
          In sed vel ut voluptatibus expedita doloremque voluptates. Ad qui officia. Aut cumque amet
          quia voluptas deserunt sunt fugit. Hic nobis pariatur voluptatem sed quas qui explicabo.
        </p>
        <p>
          Qui et perspiciatis. Esse ipsum natus provident labore eum reprehenderit iusto hic. Quis
          excepturi quis qui aut quaerat.
        </p>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>
          Tenetur sequi assumenda voluptatum doloribus. Veritatis tempora molestiae voluptas.
          Deleniti facilis sed earum rerum qui nulla optio ipsa. Consequatur sint fuga eaque et
          nesciunt nobis porro et ipsam. Alias rerum illum velit quos.
        </p>
        <p>
          Nulla qui fugiat sed exercitationem vel. Similique beatae vero aperiam assumenda quae
          cumque illo vitae. Quam modi molestiae voluptatibus quia quia maiores et id laudantium.
          Animi quis eius. Sit earum hic omnis blanditiis nam perferendis.
        </p>
      </Grid>
    </Grid>
  </div>
);

export default AboutUsIntroduction;
