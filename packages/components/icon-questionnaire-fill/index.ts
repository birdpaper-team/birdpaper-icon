import type { App } from 'vue';
import _IconQuestionnaireFill from './icon-questionnaire-fill.vue';

const IconQuestionnaireFill = Object.assign(_IconQuestionnaireFill, {
  install: (app: App) => {
    app.component(_IconQuestionnaireFill.name, _IconQuestionnaireFill);
  }
});

export default IconQuestionnaireFill;