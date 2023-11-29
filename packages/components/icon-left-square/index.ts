import type { App } from 'vue';
import _IconLeftSquare from './icon-left-square.vue';

const IconLeftSquare = Object.assign(_IconLeftSquare, {
  install: (app: App) => {
    app.component(_IconLeftSquare.name, _IconLeftSquare);
  }
});

export default IconLeftSquare;