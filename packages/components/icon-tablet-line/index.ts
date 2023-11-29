import type { App } from 'vue';
import _IconTabletLine from './icon-tablet-line.vue';

const IconTabletLine = Object.assign(_IconTabletLine, {
  install: (app: App) => {
    app.component(_IconTabletLine.name, _IconTabletLine);
  }
});

export default IconTabletLine;