import type { App } from 'vue';
import _IconNurseLine from './icon-nurse-line.vue';

const IconNurseLine = Object.assign(_IconNurseLine, {
  install: (app: App) => {
    app.component(_IconNurseLine.name, _IconNurseLine);
  }
});

export default IconNurseLine;