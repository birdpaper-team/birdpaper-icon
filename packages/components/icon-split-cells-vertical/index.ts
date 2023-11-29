import type { App } from 'vue';
import _IconSplitCellsVertical from './icon-split-cells-vertical.vue';

const IconSplitCellsVertical = Object.assign(_IconSplitCellsVertical, {
  install: (app: App) => {
    app.component(_IconSplitCellsVertical.name, _IconSplitCellsVertical);
  }
});

export default IconSplitCellsVertical;