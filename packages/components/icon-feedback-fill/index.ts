import type { App } from 'vue';
import _IconFeedbackFill from './icon-feedback-fill.vue';

const IconFeedbackFill = Object.assign(_IconFeedbackFill, {
  install: (app: App) => {
    app.component(_IconFeedbackFill.name, _IconFeedbackFill);
  }
});

export default IconFeedbackFill;