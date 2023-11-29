import type { App } from 'vue';
import _IconDropboxFill from './icon-dropbox-fill.vue';

const IconDropboxFill = Object.assign(_IconDropboxFill, {
  install: (app: App) => {
    app.component(_IconDropboxFill.name, _IconDropboxFill);
  }
});

export default IconDropboxFill;