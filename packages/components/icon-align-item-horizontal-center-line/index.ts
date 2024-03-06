import type { App } from 'vue';
import _IconAlignItemHorizontalCenterLine from './icon-align-item-horizontal-center-line.vue';

const IconAlignItemHorizontalCenterLine = Object.assign(_IconAlignItemHorizontalCenterLine, {
  install: (app: App) => {
    app.component(_IconAlignItemHorizontalCenterLine.name, _IconAlignItemHorizontalCenterLine);
  }
});

export default IconAlignItemHorizontalCenterLine;