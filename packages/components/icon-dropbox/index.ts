import type { App } from 'vue';
import _IconDropbox from './icon-dropbox.vue';

const IconDropbox = Object.assign(_IconDropbox, {
  install: (app: App) => {
    app.component(_IconDropbox.name, _IconDropbox);
  }
});

export default IconDropbox;