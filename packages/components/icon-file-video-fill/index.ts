import type { App } from 'vue';
import _IconFileVideoFill from './icon-file-video-fill.vue';

const IconFileVideoFill = Object.assign(_IconFileVideoFill, {
  install: (app: App) => {
    app.component(_IconFileVideoFill.name, _IconFileVideoFill);
  }
});

export default IconFileVideoFill;