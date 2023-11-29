import type { App } from 'vue';
import _IconDisqusFill from './icon-disqus-fill.vue';

const IconDisqusFill = Object.assign(_IconDisqusFill, {
  install: (app: App) => {
    app.component(_IconDisqusFill.name, _IconDisqusFill);
  }
});

export default IconDisqusFill;