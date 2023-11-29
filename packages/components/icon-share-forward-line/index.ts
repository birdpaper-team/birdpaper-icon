import type { App } from 'vue';
import _IconShareForwardLine from './icon-share-forward-line.vue';

const IconShareForwardLine = Object.assign(_IconShareForwardLine, {
  install: (app: App) => {
    app.component(_IconShareForwardLine.name, _IconShareForwardLine);
  }
});

export default IconShareForwardLine;