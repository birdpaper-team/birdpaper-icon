import type { App } from 'vue';
import _IconAppletClosed from './icon-applet-closed.vue';

const IconAppletClosed = Object.assign(_IconAppletClosed, {
  install: (app: App) => {
    app.component(_IconAppletClosed.name, _IconAppletClosed);
  }
});

export default IconAppletClosed;