import type { App } from 'vue';
import _IconFeedbackLine from './icon-feedback-line.vue';

const IconFeedbackLine = Object.assign(_IconFeedbackLine, {
  install: (app: App) => {
    app.component(_IconFeedbackLine.name, _IconFeedbackLine);
  }
});

export default IconFeedbackLine;