import type { App } from 'vue';
import _IconWebhookFill from './icon-webhook-fill.vue';

const IconWebhookFill = Object.assign(_IconWebhookFill, {
  install: (app: App) => {
    app.component(_IconWebhookFill.name, _IconWebhookFill);
  }
});

export default IconWebhookFill;