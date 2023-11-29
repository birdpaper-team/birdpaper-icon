import type { App } from 'vue';
import _IconReject from './icon-reject.vue';

const IconReject = Object.assign(_IconReject, {
  install: (app: App) => {
    app.component(_IconReject.name, _IconReject);
  }
});

export default IconReject;