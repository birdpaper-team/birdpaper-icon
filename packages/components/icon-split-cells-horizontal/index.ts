import type { App } from 'vue';
import _IconSplitCellsHorizontal from './icon-split-cells-horizontal.vue';

const IconSplitCellsHorizontal = Object.assign(_IconSplitCellsHorizontal, {
  install: (app: App) => {
    app.component(_IconSplitCellsHorizontal.name, _IconSplitCellsHorizontal);
  }
});

export default IconSplitCellsHorizontal;