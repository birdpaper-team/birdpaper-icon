import type { App } from 'vue';
import _IconOpenOne from './icon-open-one.vue';

const IconOpenOne = Object.assign(_IconOpenOne, {
  install: (app: App) => {
    app.component(_IconOpenOne.name, _IconOpenOne);
  }
});

export default IconOpenOne;