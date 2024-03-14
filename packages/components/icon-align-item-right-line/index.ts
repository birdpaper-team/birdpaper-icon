import type { App } from 'vue';
import _IconAlignItemRightLine from './icon-align-item-right-line.vue';

const IconAlignItemRightLine = Object.assign(_IconAlignItemRightLine, {
  install: (app: App) => {
    app.component(_IconAlignItemRightLine.name, _IconAlignItemRightLine);
  }
});

export default IconAlignItemRightLine;