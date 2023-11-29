import type { App } from 'vue';
import _IconAncientPavilionLine from './icon-ancient-pavilion-line.vue';

const IconAncientPavilionLine = Object.assign(_IconAncientPavilionLine, {
  install: (app: App) => {
    app.component(_IconAncientPavilionLine.name, _IconAncientPavilionLine);
  }
});

export default IconAncientPavilionLine;