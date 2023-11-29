import type { App } from 'vue';
import _IconMuseumTwo from './icon-museum-two.vue';

const IconMuseumTwo = Object.assign(_IconMuseumTwo, {
  install: (app: App) => {
    app.component(_IconMuseumTwo.name, _IconMuseumTwo);
  }
});

export default IconMuseumTwo;