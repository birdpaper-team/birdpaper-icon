import type { App } from 'vue';
import _IconSeoLine from './icon-seo-line.vue';

const IconSeoLine = Object.assign(_IconSeoLine, {
  install: (app: App) => {
    app.component(_IconSeoLine.name, _IconSeoLine);
  }
});

export default IconSeoLine;