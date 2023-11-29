import type { App } from 'vue';
import _IconMicroSd from './icon-micro-sd.vue';

const IconMicroSd = Object.assign(_IconMicroSd, {
  install: (app: App) => {
    app.component(_IconMicroSd.name, _IconMicroSd);
  }
});

export default IconMicroSd;