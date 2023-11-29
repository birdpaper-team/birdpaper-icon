import type { App } from 'vue';
import _IconUser2Fill from './icon-user-2-fill.vue';

const IconUser2Fill = Object.assign(_IconUser2Fill, {
  install: (app: App) => {
    app.component(_IconUser2Fill.name, _IconUser2Fill);
  }
});

export default IconUser2Fill;