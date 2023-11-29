import type { App } from 'vue';
import _IconFilterOne from './icon-filter-one.vue';

const IconFilterOne = Object.assign(_IconFilterOne, {
  install: (app: App) => {
    app.component(_IconFilterOne.name, _IconFilterOne);
  }
});

export default IconFilterOne;