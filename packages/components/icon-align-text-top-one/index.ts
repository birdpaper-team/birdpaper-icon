import type { App } from 'vue';
import _IconAlignTextTopOne from './icon-align-text-top-one.vue';

const IconAlignTextTopOne = Object.assign(_IconAlignTextTopOne, {
  install: (app: App) => {
    app.component(_IconAlignTextTopOne.name, _IconAlignTextTopOne);
  }
});

export default IconAlignTextTopOne;