import type { App } from 'vue';
import _IconWatch from './icon-watch.vue';

const IconWatch = Object.assign(_IconWatch, {
  install: (app: App) => {
    app.component(_IconWatch.name, _IconWatch);
  }
});

export default IconWatch;