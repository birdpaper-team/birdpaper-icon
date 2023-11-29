import type { App } from 'vue';
import _IconFileCloseLine from './icon-file-close-line.vue';

const IconFileCloseLine = Object.assign(_IconFileCloseLine, {
  install: (app: App) => {
    app.component(_IconFileCloseLine.name, _IconFileCloseLine);
  }
});

export default IconFileCloseLine;