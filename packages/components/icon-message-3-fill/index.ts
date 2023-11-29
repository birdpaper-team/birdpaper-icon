import type { App } from 'vue';
import _IconMessage3Fill from './icon-message-3-fill.vue';

const IconMessage3Fill = Object.assign(_IconMessage3Fill, {
  install: (app: App) => {
    app.component(_IconMessage3Fill.name, _IconMessage3Fill);
  }
});

export default IconMessage3Fill;