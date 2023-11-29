import type { App } from 'vue';
import _IconMicrosoftLoopLine from './icon-microsoft-loop-line.vue';

const IconMicrosoftLoopLine = Object.assign(_IconMicrosoftLoopLine, {
  install: (app: App) => {
    app.component(_IconMicrosoftLoopLine.name, _IconMicrosoftLoopLine);
  }
});

export default IconMicrosoftLoopLine;