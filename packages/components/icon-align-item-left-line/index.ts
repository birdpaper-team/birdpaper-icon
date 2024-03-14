import type { App } from 'vue';
import _IconAlignItemLeftLine from './icon-align-item-left-line.vue';

const IconAlignItemLeftLine = Object.assign(_IconAlignItemLeftLine, {
  install: (app: App) => {
    app.component(_IconAlignItemLeftLine.name, _IconAlignItemLeftLine);
  }
});

export default IconAlignItemLeftLine;