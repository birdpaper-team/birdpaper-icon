import type { App } from 'vue';
import _IconPuzzleFill from './icon-puzzle-fill.vue';

const IconPuzzleFill = Object.assign(_IconPuzzleFill, {
  install: (app: App) => {
    app.component(_IconPuzzleFill.name, _IconPuzzleFill);
  }
});

export default IconPuzzleFill;