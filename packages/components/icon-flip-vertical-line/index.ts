import type { App } from 'vue';
import _IconFlipVerticalLine from './icon-flip-vertical-line.vue';

const IconFlipVerticalLine = Object.assign(_IconFlipVerticalLine, {
  install: (app: App) => {
    app.component(_IconFlipVerticalLine.name, _IconFlipVerticalLine);
  }
});

export default IconFlipVerticalLine;