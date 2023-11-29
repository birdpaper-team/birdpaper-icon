import type { App } from 'vue';
import _IconRainbowFill from './icon-rainbow-fill.vue';

const IconRainbowFill = Object.assign(_IconRainbowFill, {
  install: (app: App) => {
    app.component(_IconRainbowFill.name, _IconRainbowFill);
  }
});

export default IconRainbowFill;