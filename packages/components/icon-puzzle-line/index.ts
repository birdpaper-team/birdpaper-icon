import type { App } from 'vue';
import _IconPuzzleLine from './icon-puzzle-line.vue';

const IconPuzzleLine = Object.assign(_IconPuzzleLine, {
  install: (app: App) => {
    app.component(_IconPuzzleLine.name, _IconPuzzleLine);
  }
});

export default IconPuzzleLine;