import type { App } from 'vue';
import _IconAiGenerate from './icon-ai-generate.vue';

const IconAiGenerate = Object.assign(_IconAiGenerate, {
  install: (app: App) => {
    app.component(_IconAiGenerate.name, _IconAiGenerate);
  }
});

export default IconAiGenerate;