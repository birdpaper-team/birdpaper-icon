import type { App } from 'vue';
import _IconInputCursorMove from './icon-input-cursor-move.vue';

const IconInputCursorMove = Object.assign(_IconInputCursorMove, {
  install: (app: App) => {
    app.component(_IconInputCursorMove.name, _IconInputCursorMove);
  }
});

export default IconInputCursorMove;