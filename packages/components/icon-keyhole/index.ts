import type { App } from 'vue';
import _IconKeyhole from './icon-keyhole.vue';

const IconKeyhole = Object.assign(_IconKeyhole, {
  install: (app: App) => {
    app.component(_IconKeyhole.name, _IconKeyhole);
  }
});

export default IconKeyhole;