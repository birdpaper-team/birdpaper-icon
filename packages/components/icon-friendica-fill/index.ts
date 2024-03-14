import type { App } from 'vue';
import _IconFriendicaFill from './icon-friendica-fill.vue';

const IconFriendicaFill = Object.assign(_IconFriendicaFill, {
  install: (app: App) => {
    app.component(_IconFriendicaFill.name, _IconFriendicaFill);
  }
});

export default IconFriendicaFill;