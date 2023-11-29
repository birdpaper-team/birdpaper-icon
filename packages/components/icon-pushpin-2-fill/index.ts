import type { App } from 'vue';
import _IconPushpin2Fill from './icon-pushpin-2-fill.vue';

const IconPushpin2Fill = Object.assign(_IconPushpin2Fill, {
  install: (app: App) => {
    app.component(_IconPushpin2Fill.name, _IconPushpin2Fill);
  }
});

export default IconPushpin2Fill;