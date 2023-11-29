import type { App } from 'vue';
import _IconDisqusLine from './icon-disqus-line.vue';

const IconDisqusLine = Object.assign(_IconDisqusLine, {
  install: (app: App) => {
    app.component(_IconDisqusLine.name, _IconDisqusLine);
  }
});

export default IconDisqusLine;