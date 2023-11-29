import type { App } from 'vue';
import _IconWeiboFill from './icon-weibo-fill.vue';

const IconWeiboFill = Object.assign(_IconWeiboFill, {
  install: (app: App) => {
    app.component(_IconWeiboFill.name, _IconWeiboFill);
  }
});

export default IconWeiboFill;