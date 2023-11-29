import type { App } from 'vue';
import _IconVideoAddFill from './icon-video-add-fill.vue';

const IconVideoAddFill = Object.assign(_IconVideoAddFill, {
  install: (app: App) => {
    app.component(_IconVideoAddFill.name, _IconVideoAddFill);
  }
});

export default IconVideoAddFill;