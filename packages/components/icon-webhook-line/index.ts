import type { App } from 'vue';
import _IconWebhookLine from './icon-webhook-line.vue';

const IconWebhookLine = Object.assign(_IconWebhookLine, {
  install: (app: App) => {
    app.component(_IconWebhookLine.name, _IconWebhookLine);
  }
});

export default IconWebhookLine;