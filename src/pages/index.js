import initHome from './home';
import initAbout from './about';
import initPortfolioAdobe from './portfolio-adobe';
import initPortfolioPhoto from './portfolio-photo';
import initPhotos from './photos';

export default () => {
  console.log('init pages');
  initHome();
  initAbout();
  initPortfolioAdobe();
  initPortfolioPhoto();
  initPhotos();
};
