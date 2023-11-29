import type { App } from 'vue';
import _IconSurveyFill from './icon-survey-fill.vue';

const IconSurveyFill = Object.assign(_IconSurveyFill, {
  install: (app: App) => {
    app.component(_IconSurveyFill.name, _IconSurveyFill);
  }
});

export default IconSurveyFill;