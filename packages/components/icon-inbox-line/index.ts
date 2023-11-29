import type { App } from 'vue';
import _IconInboxLine from './icon-inbox-line.vue';

const IconInboxLine = Object.assign(_IconInboxLine, {
  install: (app: App) => {
    app.component(_IconInboxLine.name, _IconInboxLine);
  }
});

export default IconInboxLine;