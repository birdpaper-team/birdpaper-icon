import type { App } from 'vue';
import _IconStopwatch from './icon-stopwatch.vue';

const IconStopwatch = Object.assign(_IconStopwatch, {
  install: (app: App) => {
    app.component(_IconStopwatch.name, _IconStopwatch);
  }
});

export default IconStopwatch;