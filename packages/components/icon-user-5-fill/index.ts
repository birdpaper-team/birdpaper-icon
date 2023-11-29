import type { App } from 'vue';
import _IconUser5Fill from './icon-user-5-fill.vue';

const IconUser5Fill = Object.assign(_IconUser5Fill, {
  install: (app: App) => {
    app.component(_IconUser5Fill.name, _IconUser5Fill);
  }
});

export default IconUser5Fill;