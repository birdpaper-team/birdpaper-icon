import type { App } from 'vue';
import _IconVideoOnFill from './icon-video-on-fill.vue';

const IconVideoOnFill = Object.assign(_IconVideoOnFill, {
  install: (app: App) => {
    app.component(_IconVideoOnFill.name, _IconVideoOnFill);
  }
});

export default IconVideoOnFill;