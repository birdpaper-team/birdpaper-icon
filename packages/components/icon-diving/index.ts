import type { App } from 'vue';
import _IconDiving from './icon-diving.vue';

const IconDiving = Object.assign(_IconDiving, {
  install: (app: App) => {
    app.component(_IconDiving.name, _IconDiving);
  }
});

export default IconDiving;