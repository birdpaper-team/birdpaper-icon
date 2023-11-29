import type { App } from 'vue';
import _IconNodeSquare from './icon-node-square.vue';

const IconNodeSquare = Object.assign(_IconNodeSquare, {
  install: (app: App) => {
    app.component(_IconNodeSquare.name, _IconNodeSquare);
  }
});

export default IconNodeSquare;