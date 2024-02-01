import type { App } from 'vue';
import _IconShadowLine from './icon-shadow-line.vue';

const IconShadowLine = Object.assign(_IconShadowLine, {
  install: (app: App) => {
    app.component(_IconShadowLine.name, _IconShadowLine);
  }
});

export default IconShadowLine;