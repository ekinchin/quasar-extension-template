import { version } from '../package.json';
import Component from './components/Component.vue';
import module from './store';

export {
  version,
  Component,
  module,
};

export default {
  version,
  Component,
  install(Vue) {
    Vue.component(Component.name, Component);
  },
};
