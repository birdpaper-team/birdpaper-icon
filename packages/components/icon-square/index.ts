import type { App } from 'vue';
import _IconSquare from './icon-square.vue';

const IconSquare = Object.assign(_IconSquare, {
  install: (app: App) => {
    app.component(_IconSquare.name, _IconSquare);
  }
});

export default IconSquare;