import type { App } from 'vue';
import _IconLinkedinBoxLine from './icon-linkedin-box-line.vue';

const IconLinkedinBoxLine = Object.assign(_IconLinkedinBoxLine, {
  install: (app: App) => {
    app.component(_IconLinkedinBoxLine.name, _IconLinkedinBoxLine);
  }
});

export default IconLinkedinBoxLine;