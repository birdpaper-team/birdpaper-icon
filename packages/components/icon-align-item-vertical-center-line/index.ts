import type { App } from 'vue';
import _IconAlignItemVerticalCenterLine from './icon-align-item-vertical-center-line.vue';

const IconAlignItemVerticalCenterLine = Object.assign(_IconAlignItemVerticalCenterLine, {
  install: (app: App) => {
    app.component(_IconAlignItemVerticalCenterLine.name, _IconAlignItemVerticalCenterLine);
  }
});

export default IconAlignItemVerticalCenterLine;