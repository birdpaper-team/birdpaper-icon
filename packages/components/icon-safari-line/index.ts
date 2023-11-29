import type { App } from 'vue';
import _IconSafariLine from './icon-safari-line.vue';

const IconSafariLine = Object.assign(_IconSafariLine, {
  install: (app: App) => {
    app.component(_IconSafariLine.name, _IconSafariLine);
  }
});

export default IconSafariLine;