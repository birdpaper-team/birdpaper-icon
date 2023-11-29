import type { App } from 'vue';
import _IconSofaLine from './icon-sofa-line.vue';

const IconSofaLine = Object.assign(_IconSofaLine, {
  install: (app: App) => {
    app.component(_IconSofaLine.name, _IconSofaLine);
  }
});

export default IconSofaLine;