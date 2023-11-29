import type { App } from 'vue';
import _IconClipboardLine from './icon-clipboard-line.vue';

const IconClipboardLine = Object.assign(_IconClipboardLine, {
  install: (app: App) => {
    app.component(_IconClipboardLine.name, _IconClipboardLine);
  }
});

export default IconClipboardLine;