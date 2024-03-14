import type { App } from 'vue';
import _IconPuzzle2Fill from './icon-puzzle-2-fill.vue';

const IconPuzzle2Fill = Object.assign(_IconPuzzle2Fill, {
  install: (app: App) => {
    app.component(_IconPuzzle2Fill.name, _IconPuzzle2Fill);
  }
});

export default IconPuzzle2Fill;