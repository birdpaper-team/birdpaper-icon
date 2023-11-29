import type { App } from 'vue';
import _IconErrorPrompt from './icon-error-prompt.vue';

const IconErrorPrompt = Object.assign(_IconErrorPrompt, {
  install: (app: App) => {
    app.component(_IconErrorPrompt.name, _IconErrorPrompt);
  }
});

export default IconErrorPrompt;