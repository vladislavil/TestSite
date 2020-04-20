import $ from 'jquery';

import './fonts';
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';

() => {
  initLayout();
  initBlocks();
  initPages();
};
