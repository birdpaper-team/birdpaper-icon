import type { App } from 'vue';
import _IconMove from './icon-move.vue';

const IconMove = Object.assign(_IconMove, {
  install: (app: App) => {
    app.component(_IconMove.name, _IconMove);
  }
});

export default IconMove;