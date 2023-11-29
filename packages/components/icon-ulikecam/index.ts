import type { App } from 'vue';
import _IconUlikecam from './icon-ulikecam.vue';

const IconUlikecam = Object.assign(_IconUlikecam, {
  install: (app: App) => {
    app.component(_IconUlikecam.name, _IconUlikecam);
  }
});

export default IconUlikecam;