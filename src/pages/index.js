import initHome from './home'
import initHobby from './hobby'
import initAbout from './about'
import initPorgfolio from './portfolio'

export default () => {
  console.log('init pages');
  initHome();
  initHobby();
  initAbout();
  initPorgfolio();
};
