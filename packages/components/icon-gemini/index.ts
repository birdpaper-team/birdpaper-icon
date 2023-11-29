import type { App } from 'vue';
import _IconGemini from './icon-gemini.vue';

const IconGemini = Object.assign(_IconGemini, {
  install: (app: App) => {
    app.component(_IconGemini.name, _IconGemini);
  }
});

export default IconGemini;