import type { App } from 'vue';
import _IconTumblrFill from './icon-tumblr-fill.vue';

const IconTumblrFill = Object.assign(_IconTumblrFill, {
  install: (app: App) => {
    app.component(_IconTumblrFill.name, _IconTumblrFill);
  }
});

export default IconTumblrFill;