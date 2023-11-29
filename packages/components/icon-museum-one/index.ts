import type { App } from 'vue';
import _IconMuseumOne from './icon-museum-one.vue';

const IconMuseumOne = Object.assign(_IconMuseumOne, {
  install: (app: App) => {
    app.component(_IconMuseumOne.name, _IconMuseumOne);
  }
});

export default IconMuseumOne;