import type { App } from 'vue';
import _IconReplay5Fill from './icon-replay-5-fill.vue';

const IconReplay5Fill = Object.assign(_IconReplay5Fill, {
  install: (app: App) => {
    app.component(_IconReplay5Fill.name, _IconReplay5Fill);
  }
});

export default IconReplay5Fill;