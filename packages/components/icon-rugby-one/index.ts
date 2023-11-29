import type { App } from 'vue';
import _IconRugbyOne from './icon-rugby-one.vue';

const IconRugbyOne = Object.assign(_IconRugbyOne, {
  install: (app: App) => {
    app.component(_IconRugbyOne.name, _IconRugbyOne);
  }
});

export default IconRugbyOne;