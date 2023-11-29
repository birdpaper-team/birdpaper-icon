import type { App } from 'vue';
import _IconMailCloseLine from './icon-mail-close-line.vue';

const IconMailCloseLine = Object.assign(_IconMailCloseLine, {
  install: (app: App) => {
    app.component(_IconMailCloseLine.name, _IconMailCloseLine);
  }
});

export default IconMailCloseLine;