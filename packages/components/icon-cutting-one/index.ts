import type { App } from 'vue';
import _IconCuttingOne from './icon-cutting-one.vue';

const IconCuttingOne = Object.assign(_IconCuttingOne, {
  install: (app: App) => {
    app.component(_IconCuttingOne.name, _IconCuttingOne);
  }
});

export default IconCuttingOne;