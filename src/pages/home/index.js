import Vue from 'vue';
import AppVue from './App.vue';

import './index.pug';
import './index.sass';


export default () => {

  new Vue({
    el: '#test-vue',
    render: createElem => createElem(AppVue),
  });

  AppReact();
};
