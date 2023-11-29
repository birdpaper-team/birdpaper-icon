import type { App } from 'vue';
import _IconAbdominal from './icon-abdominal.vue';

const IconAbdominal = Object.assign(_IconAbdominal, {
  install: (app: App) => {
    app.component(_IconAbdominal.name, _IconAbdominal);
  }
});

export default IconAbdominal;