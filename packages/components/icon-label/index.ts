import type { App } from 'vue';
import _IconLabel from './icon-label.vue';

const IconLabel = Object.assign(_IconLabel, {
  install: (app: App) => {
    app.component(_IconLabel.name, _IconLabel);
  }
});

export default IconLabel;