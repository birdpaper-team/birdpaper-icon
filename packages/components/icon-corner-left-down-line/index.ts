import type { App } from 'vue';
import _IconCornerLeftDownLine from './icon-corner-left-down-line.vue';

const IconCornerLeftDownLine = Object.assign(_IconCornerLeftDownLine, {
  install: (app: App) => {
    app.component(_IconCornerLeftDownLine.name, _IconCornerLeftDownLine);
  }
});

export default IconCornerLeftDownLine;