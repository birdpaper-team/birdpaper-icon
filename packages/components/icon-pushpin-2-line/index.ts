import type { App } from 'vue';
import _IconPushpin2Line from './icon-pushpin-2-line.vue';

const IconPushpin2Line = Object.assign(_IconPushpin2Line, {
  install: (app: App) => {
    app.component(_IconPushpin2Line.name, _IconPushpin2Line);
  }
});

export default IconPushpin2Line;