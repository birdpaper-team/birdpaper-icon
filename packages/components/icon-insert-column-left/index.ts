import type { App } from 'vue';
import _IconInsertColumnLeft from './icon-insert-column-left.vue';

const IconInsertColumnLeft = Object.assign(_IconInsertColumnLeft, {
  install: (app: App) => {
    app.component(_IconInsertColumnLeft.name, _IconInsertColumnLeft);
  }
});

export default IconInsertColumnLeft;