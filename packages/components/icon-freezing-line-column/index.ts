import type { App } from 'vue';
import _IconFreezingLineColumn from './icon-freezing-line-column.vue';

const IconFreezingLineColumn = Object.assign(_IconFreezingLineColumn, {
  install: (app: App) => {
    app.component(_IconFreezingLineColumn.name, _IconFreezingLineColumn);
  }
});

export default IconFreezingLineColumn;