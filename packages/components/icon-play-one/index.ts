import type { App } from 'vue';
import _IconPlayOne from './icon-play-one.vue';

const IconPlayOne = Object.assign(_IconPlayOne, {
  install: (app: App) => {
    app.component(_IconPlayOne.name, _IconPlayOne);
  }
});

export default IconPlayOne;