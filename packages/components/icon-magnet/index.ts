import type { App } from 'vue';
import _IconMagnet from './icon-magnet.vue';

const IconMagnet = Object.assign(_IconMagnet, {
  install: (app: App) => {
    app.component(_IconMagnet.name, _IconMagnet);
  }
});

export default IconMagnet;