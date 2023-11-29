import type { App } from 'vue';
import _IconUser6Fill from './icon-user-6-fill.vue';

const IconUser6Fill = Object.assign(_IconUser6Fill, {
  install: (app: App) => {
    app.component(_IconUser6Fill.name, _IconUser6Fill);
  }
});

export default IconUser6Fill;