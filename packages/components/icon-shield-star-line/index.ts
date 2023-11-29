import type { App } from 'vue';
import _IconShieldStarLine from './icon-shield-star-line.vue';

const IconShieldStarLine = Object.assign(_IconShieldStarLine, {
  install: (app: App) => {
    app.component(_IconShieldStarLine.name, _IconShieldStarLine);
  }
});

export default IconShieldStarLine;