import type { App } from 'vue';
import _IconVerticalTidyUp from './icon-vertical-tidy-up.vue';

const IconVerticalTidyUp = Object.assign(_IconVerticalTidyUp, {
  install: (app: App) => {
    app.component(_IconVerticalTidyUp.name, _IconVerticalTidyUp);
  }
});

export default IconVerticalTidyUp;