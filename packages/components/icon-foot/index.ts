import type { App } from 'vue';
import _IconFoot from './icon-foot.vue';

const IconFoot = Object.assign(_IconFoot, {
  install: (app: App) => {
    app.component(_IconFoot.name, _IconFoot);
  }
});

export default IconFoot;