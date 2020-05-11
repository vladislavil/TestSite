import initHome from './home';
import initAbout from './about'
import initPortfolio from './portfolio'
import initContacts from './contacts'

export default () => {
  console.log('init pages');
  initHome();
  initAbout();
  initPortfolio();
  initContacts();
};
