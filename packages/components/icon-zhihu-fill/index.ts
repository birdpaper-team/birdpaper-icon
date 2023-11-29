import type { App } from 'vue';
import _IconZhihuFill from './icon-zhihu-fill.vue';

const IconZhihuFill = Object.assign(_IconZhihuFill, {
  install: (app: App) => {
    app.component(_IconZhihuFill.name, _IconZhihuFill);
  }
});

export default IconZhihuFill;