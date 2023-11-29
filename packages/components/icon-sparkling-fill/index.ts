import type { App } from 'vue';
import _IconSparklingFill from './icon-sparkling-fill.vue';

const IconSparklingFill = Object.assign(_IconSparklingFill, {
  install: (app: App) => {
    app.component(_IconSparklingFill.name, _IconSparklingFill);
  }
});

export default IconSparklingFill;