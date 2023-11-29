import type { App } from 'vue';
import _IconClipboard from './icon-clipboard.vue';

const IconClipboard = Object.assign(_IconClipboard, {
  install: (app: App) => {
    app.component(_IconClipboard.name, _IconClipboard);
  }
});

export default IconClipboard;