import type { App } from 'vue';
import _IconWordpressLine from './icon-wordpress-line.vue';

const IconWordpressLine = Object.assign(_IconWordpressLine, {
  install: (app: App) => {
    app.component(_IconWordpressLine.name, _IconWordpressLine);
  }
});

export default IconWordpressLine;