import type { App } from 'vue';
import _IconQuestionAnswerFill from './icon-question-answer-fill.vue';

const IconQuestionAnswerFill = Object.assign(_IconQuestionAnswerFill, {
  install: (app: App) => {
    app.component(_IconQuestionAnswerFill.name, _IconQuestionAnswerFill);
  }
});

export default IconQuestionAnswerFill;