import type { App } from 'vue';
import _IconTrace from './icon-trace.vue';

const IconTrace = Object.assign(_IconTrace, {
  install: (app: App) => {
    app.component(_IconTrace.name, _IconTrace);
  }
});

export default IconTrace;