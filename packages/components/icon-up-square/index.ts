import type { App } from 'vue';
import _IconUpSquare from './icon-up-square.vue';

const IconUpSquare = Object.assign(_IconUpSquare, {
  install: (app: App) => {
    app.component(_IconUpSquare.name, _IconUpSquare);
  }
});

export default IconUpSquare;