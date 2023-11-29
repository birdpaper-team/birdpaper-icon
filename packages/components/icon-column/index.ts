import type { App } from 'vue';
import _IconColumn from './icon-column.vue';

const IconColumn = Object.assign(_IconColumn, {
  install: (app: App) => {
    app.component(_IconColumn.name, _IconColumn);
  }
});

export default IconColumn;