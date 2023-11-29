import type { App } from 'vue';
import _IconRenal from './icon-renal.vue';

const IconRenal = Object.assign(_IconRenal, {
  install: (app: App) => {
    app.component(_IconRenal.name, _IconRenal);
  }
});

export default IconRenal;