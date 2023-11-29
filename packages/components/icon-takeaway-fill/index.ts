import type { App } from 'vue';
import _IconTakeawayFill from './icon-takeaway-fill.vue';

const IconTakeawayFill = Object.assign(_IconTakeawayFill, {
  install: (app: App) => {
    app.component(_IconTakeawayFill.name, _IconTakeawayFill);
  }
});

export default IconTakeawayFill;