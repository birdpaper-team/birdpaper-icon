import type { App } from 'vue';
import _IconWorker from './icon-worker.vue';

const IconWorker = Object.assign(_IconWorker, {
  install: (app: App) => {
    app.component(_IconWorker.name, _IconWorker);
  }
});

export default IconWorker;