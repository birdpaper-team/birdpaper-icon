import type { App } from 'vue';
import _IconDownSquare from './icon-down-square.vue';

const IconDownSquare = Object.assign(_IconDownSquare, {
  install: (app: App) => {
    app.component(_IconDownSquare.name, _IconDownSquare);
  }
});

export default IconDownSquare;