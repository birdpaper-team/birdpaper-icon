import type { App } from 'vue';
import _IconInsertColumnRight from './icon-insert-column-right.vue';

const IconInsertColumnRight = Object.assign(_IconInsertColumnRight, {
  install: (app: App) => {
    app.component(_IconInsertColumnRight.name, _IconInsertColumnRight);
  }
});

export default IconInsertColumnRight;