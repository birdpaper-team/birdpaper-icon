import type { App } from 'vue';
import _IconShareBoxLine from './icon-share-box-line.vue';

const IconShareBoxLine = Object.assign(_IconShareBoxLine, {
  install: (app: App) => {
    app.component(_IconShareBoxLine.name, _IconShareBoxLine);
  }
});

export default IconShareBoxLine;