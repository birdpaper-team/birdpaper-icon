import type { App } from 'vue';
import _IconCell from './icon-cell.vue';

const IconCell = Object.assign(_IconCell, {
  install: (app: App) => {
    app.component(_IconCell.name, _IconCell);
  }
});

export default IconCell;