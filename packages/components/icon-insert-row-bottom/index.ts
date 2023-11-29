import type { App } from 'vue';
import _IconInsertRowBottom from './icon-insert-row-bottom.vue';

const IconInsertRowBottom = Object.assign(_IconInsertRowBottom, {
  install: (app: App) => {
    app.component(_IconInsertRowBottom.name, _IconInsertRowBottom);
  }
});

export default IconInsertRowBottom;