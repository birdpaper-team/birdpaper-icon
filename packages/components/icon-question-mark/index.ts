import type { App } from 'vue';
import _IconQuestionMark from './icon-question-mark.vue';

const IconQuestionMark = Object.assign(_IconQuestionMark, {
  install: (app: App) => {
    app.component(_IconQuestionMark.name, _IconQuestionMark);
  }
});

export default IconQuestionMark;