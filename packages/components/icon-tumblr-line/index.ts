import type { App } from 'vue';
import _IconTumblrLine from './icon-tumblr-line.vue';

const IconTumblrLine = Object.assign(_IconTumblrLine, {
  install: (app: App) => {
    app.component(_IconTumblrLine.name, _IconTumblrLine);
  }
});

export default IconTumblrLine;