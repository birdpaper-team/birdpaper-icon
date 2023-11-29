import type { App } from 'vue';
import _IconClipboardFill from './icon-clipboard-fill.vue';

const IconClipboardFill = Object.assign(_IconClipboardFill, {
  install: (app: App) => {
    app.component(_IconClipboardFill.name, _IconClipboardFill);
  }
});

export default IconClipboardFill;