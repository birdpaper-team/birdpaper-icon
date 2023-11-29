import type { App } from 'vue';
import _IconMailSendLine from './icon-mail-send-line.vue';

const IconMailSendLine = Object.assign(_IconMailSendLine, {
  install: (app: App) => {
    app.component(_IconMailSendLine.name, _IconMailSendLine);
  }
});

export default IconMailSendLine;