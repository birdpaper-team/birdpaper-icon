import type { App } from 'vue';
import _IconTajMahal from './icon-taj-mahal.vue';

const IconTajMahal = Object.assign(_IconTajMahal, {
  install: (app: App) => {
    app.component(_IconTajMahal.name, _IconTajMahal);
  }
});

export default IconTajMahal;