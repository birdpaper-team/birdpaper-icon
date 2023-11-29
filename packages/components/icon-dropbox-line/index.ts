import type { App } from 'vue';
import _IconDropboxLine from './icon-dropbox-line.vue';

const IconDropboxLine = Object.assign(_IconDropboxLine, {
  install: (app: App) => {
    app.component(_IconDropboxLine.name, _IconDropboxLine);
  }
});

export default IconDropboxLine;