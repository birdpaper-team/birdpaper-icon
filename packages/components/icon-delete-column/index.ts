import type { App } from 'vue';
import _IconDeleteColumn from './icon-delete-column.vue';

const IconDeleteColumn = Object.assign(_IconDeleteColumn, {
  install: (app: App) => {
    app.component(_IconDeleteColumn.name, _IconDeleteColumn);
  }
});

export default IconDeleteColumn;