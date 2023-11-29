import type { App } from 'vue';
import _IconResting from './icon-resting.vue';

const IconResting = Object.assign(_IconResting, {
  install: (app: App) => {
    app.component(_IconResting.name, _IconResting);
  }
});

export default IconResting;