import type { App } from 'vue';
import _IconBloggerFill from './icon-blogger-fill.vue';

const IconBloggerFill = Object.assign(_IconBloggerFill, {
  install: (app: App) => {
    app.component(_IconBloggerFill.name, _IconBloggerFill);
  }
});

export default IconBloggerFill;