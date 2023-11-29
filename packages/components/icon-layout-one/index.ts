import type { App } from 'vue';
import _IconLayoutOne from './icon-layout-one.vue';

const IconLayoutOne = Object.assign(_IconLayoutOne, {
  install: (app: App) => {
    app.component(_IconLayoutOne.name, _IconLayoutOne);
  }
});

export default IconLayoutOne;