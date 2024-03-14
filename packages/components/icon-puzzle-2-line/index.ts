import type { App } from 'vue';
import _IconPuzzle2Line from './icon-puzzle-2-line.vue';

const IconPuzzle2Line = Object.assign(_IconPuzzle2Line, {
  install: (app: App) => {
    app.component(_IconPuzzle2Line.name, _IconPuzzle2Line);
  }
});

export default IconPuzzle2Line;