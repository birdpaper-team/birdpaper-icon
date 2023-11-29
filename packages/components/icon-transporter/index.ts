import type { App } from 'vue';
import _IconTransporter from './icon-transporter.vue';

const IconTransporter = Object.assign(_IconTransporter, {
  install: (app: App) => {
    app.component(_IconTransporter.name, _IconTransporter);
  }
});

export default IconTransporter;