import type { App } from 'vue';
import _IconShiningLine from './icon-shining-line.vue';

const IconShiningLine = Object.assign(_IconShiningLine, {
  install: (app: App) => {
    app.component(_IconShiningLine.name, _IconShiningLine);
  }
});

export default IconShiningLine;