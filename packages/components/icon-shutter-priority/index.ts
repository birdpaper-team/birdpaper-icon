import type { App } from 'vue';
import _IconShutterPriority from './icon-shutter-priority.vue';

const IconShutterPriority = Object.assign(_IconShutterPriority, {
  install: (app: App) => {
    app.component(_IconShutterPriority.name, _IconShutterPriority);
  }
});

export default IconShutterPriority;