import type { App } from 'vue';
import _IconAlignItemTopLine from './icon-align-item-top-line.vue';

const IconAlignItemTopLine = Object.assign(_IconAlignItemTopLine, {
  install: (app: App) => {
    app.component(_IconAlignItemTopLine.name, _IconAlignItemTopLine);
  }
});

export default IconAlignItemTopLine;