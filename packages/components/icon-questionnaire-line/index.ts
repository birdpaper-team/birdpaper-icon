import type { App } from 'vue';
import _IconQuestionnaireLine from './icon-questionnaire-line.vue';

const IconQuestionnaireLine = Object.assign(_IconQuestionnaireLine, {
  install: (app: App) => {
    app.component(_IconQuestionnaireLine.name, _IconQuestionnaireLine);
  }
});

export default IconQuestionnaireLine;