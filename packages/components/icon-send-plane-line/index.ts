import type { App } from 'vue';
import _IconSendPlaneLine from './icon-send-plane-line.vue';

const IconSendPlaneLine = Object.assign(_IconSendPlaneLine, {
  install: (app: App) => {
    app.component(_IconSendPlaneLine.name, _IconSendPlaneLine);
  }
});

export default IconSendPlaneLine;