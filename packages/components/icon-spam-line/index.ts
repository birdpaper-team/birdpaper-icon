import type { App } from 'vue';
import _IconSpamLine from './icon-spam-line.vue';

const IconSpamLine = Object.assign(_IconSpamLine, {
  install: (app: App) => {
    app.component(_IconSpamLine.name, _IconSpamLine);
  }
});

export default IconSpamLine;