import type { App } from 'vue';
import _IconTv from './icon-tv.vue';

const IconTv = Object.assign(_IconTv, {
  install: (app: App) => {
    app.component(_IconTv.name, _IconTv);
  }
});

export default IconTv;