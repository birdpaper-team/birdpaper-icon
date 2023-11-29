import type { App } from 'vue';
import _IconRightSquare from './icon-right-square.vue';

const IconRightSquare = Object.assign(_IconRightSquare, {
  install: (app: App) => {
    app.component(_IconRightSquare.name, _IconRightSquare);
  }
});

export default IconRightSquare;