import type { App } from 'vue';
import _IconReel from './icon-reel.vue';

const IconReel = Object.assign(_IconReel, {
  install: (app: App) => {
    app.component(_IconReel.name, _IconReel);
  }
});

export default IconReel;