import type { App } from 'vue';
import _IconSurveyLine from './icon-survey-line.vue';

const IconSurveyLine = Object.assign(_IconSurveyLine, {
  install: (app: App) => {
    app.component(_IconSurveyLine.name, _IconSurveyLine);
  }
});

export default IconSurveyLine;