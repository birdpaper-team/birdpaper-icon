import type { App } from 'vue';
import _IconFacebookBoxLine from './icon-facebook-box-line.vue';

const IconFacebookBoxLine = Object.assign(_IconFacebookBoxLine, {
  install: (app: App) => {
    app.component(_IconFacebookBoxLine.name, _IconFacebookBoxLine);
  }
});

export default IconFacebookBoxLine;