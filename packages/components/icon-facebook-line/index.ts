import type { App } from 'vue';
import _IconFacebookLine from './icon-facebook-line.vue';

const IconFacebookLine = Object.assign(_IconFacebookLine, {
  install: (app: App) => {
    app.component(_IconFacebookLine.name, _IconFacebookLine);
  }
});

export default IconFacebookLine;