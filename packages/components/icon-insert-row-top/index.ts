import type { App } from 'vue';
import _IconInsertRowTop from './icon-insert-row-top.vue';

const IconInsertRowTop = Object.assign(_IconInsertRowTop, {
  install: (app: App) => {
    app.component(_IconInsertRowTop.name, _IconInsertRowTop);
  }
});

export default IconInsertRowTop;