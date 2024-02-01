import type { App } from 'vue';
import _IconBloggerLine from './icon-blogger-line.vue';

const IconBloggerLine = Object.assign(_IconBloggerLine, {
  install: (app: App) => {
    app.component(_IconBloggerLine.name, _IconBloggerLine);
  }
});

export default IconBloggerLine;