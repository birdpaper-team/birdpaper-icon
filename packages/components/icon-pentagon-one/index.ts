import type { App } from 'vue';
import _IconPentagonOne from './icon-pentagon-one.vue';

const IconPentagonOne = Object.assign(_IconPentagonOne, {
  install: (app: App) => {
    app.component(_IconPentagonOne.name, _IconPentagonOne);
  }
});

export default IconPentagonOne;