import type { App } from 'vue';
import _IconRainbowLine from './icon-rainbow-line.vue';

const IconRainbowLine = Object.assign(_IconRainbowLine, {
  install: (app: App) => {
    app.component(_IconRainbowLine.name, _IconRainbowLine);
  }
});

export default IconRainbowLine;