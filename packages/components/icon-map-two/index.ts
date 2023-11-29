import type { App } from 'vue';
import _IconMapTwo from './icon-map-two.vue';

const IconMapTwo = Object.assign(_IconMapTwo, {
  install: (app: App) => {
    app.component(_IconMapTwo.name, _IconMapTwo);
  }
});

export default IconMapTwo;