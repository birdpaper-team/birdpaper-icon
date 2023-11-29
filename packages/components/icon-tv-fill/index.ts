import type { App } from 'vue';
import _IconTvFill from './icon-tv-fill.vue';

const IconTvFill = Object.assign(_IconTvFill, {
  install: (app: App) => {
    app.component(_IconTvFill.name, _IconTvFill);
  }
});

export default IconTvFill;