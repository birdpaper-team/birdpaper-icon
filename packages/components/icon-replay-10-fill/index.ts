import type { App } from 'vue';
import _IconReplay10Fill from './icon-replay-10-fill.vue';

const IconReplay10Fill = Object.assign(_IconReplay10Fill, {
  install: (app: App) => {
    app.component(_IconReplay10Fill.name, _IconReplay10Fill);
  }
});

export default IconReplay10Fill;