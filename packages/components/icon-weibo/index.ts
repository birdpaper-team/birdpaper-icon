import type { App } from 'vue';
import _IconWeibo from './icon-weibo.vue';

const IconWeibo = Object.assign(_IconWeibo, {
  install: (app: App) => {
    app.component(_IconWeibo.name, _IconWeibo);
  }
});

export default IconWeibo;