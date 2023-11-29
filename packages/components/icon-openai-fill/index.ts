import type { App } from 'vue';
import _IconOpenaiFill from './icon-openai-fill.vue';

const IconOpenaiFill = Object.assign(_IconOpenaiFill, {
  install: (app: App) => {
    app.component(_IconOpenaiFill.name, _IconOpenaiFill);
  }
});

export default IconOpenaiFill;