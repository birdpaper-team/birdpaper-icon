import type { App } from 'vue';
import _IconPlayFill from './icon-play-fill.vue';

const IconPlayFill = Object.assign(_IconPlayFill, {
  install: (app: App) => {
    app.component(_IconPlayFill.name, _IconPlayFill);
  }
});

export default IconPlayFill;