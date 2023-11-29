import type { App } from 'vue';
import _IconPuzzle from './icon-puzzle.vue';

const IconPuzzle = Object.assign(_IconPuzzle, {
  install: (app: App) => {
    app.component(_IconPuzzle.name, _IconPuzzle);
  }
});

export default IconPuzzle;