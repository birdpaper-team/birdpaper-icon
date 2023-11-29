import type { App } from 'vue';
import _IconUser4Fill from './icon-user-4-fill.vue';

const IconUser4Fill = Object.assign(_IconUser4Fill, {
  install: (app: App) => {
    app.component(_IconUser4Fill.name, _IconUser4Fill);
  }
});

export default IconUser4Fill;