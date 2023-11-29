import type { App } from 'vue';
import _IconBellRing from './icon-bell-ring.vue';

const IconBellRing = Object.assign(_IconBellRing, {
  install: (app: App) => {
    app.component(_IconBellRing.name, _IconBellRing);
  }
});

export default IconBellRing;