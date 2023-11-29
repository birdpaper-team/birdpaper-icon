import type { App } from 'vue';
import _IconSendPlaneFill from './icon-send-plane-fill.vue';

const IconSendPlaneFill = Object.assign(_IconSendPlaneFill, {
  install: (app: App) => {
    app.component(_IconSendPlaneFill.name, _IconSendPlaneFill);
  }
});

export default IconSendPlaneFill;