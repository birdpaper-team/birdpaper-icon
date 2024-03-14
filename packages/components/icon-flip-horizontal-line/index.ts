import type { App } from 'vue';
import _IconFlipHorizontalLine from './icon-flip-horizontal-line.vue';

const IconFlipHorizontalLine = Object.assign(_IconFlipHorizontalLine, {
  install: (app: App) => {
    app.component(_IconFlipHorizontalLine.name, _IconFlipHorizontalLine);
  }
});

export default IconFlipHorizontalLine;