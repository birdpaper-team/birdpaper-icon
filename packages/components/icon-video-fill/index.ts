import type { App } from 'vue';
import _IconVideoFill from './icon-video-fill.vue';

const IconVideoFill = Object.assign(_IconVideoFill, {
  install: (app: App) => {
    app.component(_IconVideoFill.name, _IconVideoFill);
  }
});

export default IconVideoFill;