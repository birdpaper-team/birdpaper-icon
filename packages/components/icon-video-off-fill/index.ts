import type { App } from 'vue';
import _IconVideoOffFill from './icon-video-off-fill.vue';

const IconVideoOffFill = Object.assign(_IconVideoOffFill, {
  install: (app: App) => {
    app.component(_IconVideoOffFill.name, _IconVideoOffFill);
  }
});

export default IconVideoOffFill;