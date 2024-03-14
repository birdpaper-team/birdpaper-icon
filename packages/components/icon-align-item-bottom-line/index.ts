import type { App } from 'vue';
import _IconAlignItemBottomLine from './icon-align-item-bottom-line.vue';

const IconAlignItemBottomLine = Object.assign(_IconAlignItemBottomLine, {
  install: (app: App) => {
    app.component(_IconAlignItemBottomLine.name, _IconAlignItemBottomLine);
  }
});

export default IconAlignItemBottomLine;