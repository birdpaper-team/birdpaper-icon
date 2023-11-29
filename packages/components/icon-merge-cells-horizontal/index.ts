import type { App } from 'vue';
import _IconMergeCellsHorizontal from './icon-merge-cells-horizontal.vue';

const IconMergeCellsHorizontal = Object.assign(_IconMergeCellsHorizontal, {
  install: (app: App) => {
    app.component(_IconMergeCellsHorizontal.name, _IconMergeCellsHorizontal);
  }
});

export default IconMergeCellsHorizontal;