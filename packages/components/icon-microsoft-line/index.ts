import type { App } from 'vue';
import _IconMicrosoftLine from './icon-microsoft-line.vue';

const IconMicrosoftLine = Object.assign(_IconMicrosoftLine, {
  install: (app: App) => {
    app.component(_IconMicrosoftLine.name, _IconMicrosoftLine);
  }
});

export default IconMicrosoftLine;