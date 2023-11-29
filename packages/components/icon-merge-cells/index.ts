import type { App } from 'vue';
import _IconMergeCells from './icon-merge-cells.vue';

const IconMergeCells = Object.assign(_IconMergeCells, {
  install: (app: App) => {
    app.component(_IconMergeCells.name, _IconMergeCells);
  }
});

export default IconMergeCells;