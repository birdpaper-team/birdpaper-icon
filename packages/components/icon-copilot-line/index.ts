import type { App } from 'vue';
import _IconCopilotLine from './icon-copilot-line.vue';

const IconCopilotLine = Object.assign(_IconCopilotLine, {
  install: (app: App) => {
    app.component(_IconCopilotLine.name, _IconCopilotLine);
  }
});

export default IconCopilotLine;