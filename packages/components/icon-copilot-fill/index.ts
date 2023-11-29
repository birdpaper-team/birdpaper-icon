import type { App } from 'vue';
import _IconCopilotFill from './icon-copilot-fill.vue';

const IconCopilotFill = Object.assign(_IconCopilotFill, {
  install: (app: App) => {
    app.component(_IconCopilotFill.name, _IconCopilotFill);
  }
});

export default IconCopilotFill;