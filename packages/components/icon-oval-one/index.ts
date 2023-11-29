import type { App } from 'vue';
import _IconOvalOne from './icon-oval-one.vue';

const IconOvalOne = Object.assign(_IconOvalOne, {
  install: (app: App) => {
    app.component(_IconOvalOne.name, _IconOvalOne);
  }
});

export default IconOvalOne;