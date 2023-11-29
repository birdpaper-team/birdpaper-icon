import type { App } from 'vue';
import _IconGuideBoard from './icon-guide-board.vue';

const IconGuideBoard = Object.assign(_IconGuideBoard, {
  install: (app: App) => {
    app.component(_IconGuideBoard.name, _IconGuideBoard);
  }
});

export default IconGuideBoard;