import type { App } from 'vue';
import _IconRepeat2Fill from './icon-repeat-2-fill.vue';

const IconRepeat2Fill = Object.assign(_IconRepeat2Fill, {
  install: (app: App) => {
    app.component(_IconRepeat2Fill.name, _IconRepeat2Fill);
  }
});

export default IconRepeat2Fill;