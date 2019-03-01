import Vue from 'vue';
import AppVue from './App.vue';

import './index.pug';
import './index.sass';


export default () => {

  new Vue({
    el: '#main',
    render: createElem => createElem(AppVue),
  });
  AppReact();
};
