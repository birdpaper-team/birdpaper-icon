import type { App } from 'vue';
import _IconSoccer from './icon-soccer.vue';

const IconSoccer = Object.assign(_IconSoccer, {
  install: (app: App) => {
    app.component(_IconSoccer.name, _IconSoccer);
  }
});

export default IconSoccer;