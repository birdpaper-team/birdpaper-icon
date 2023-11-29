import type { App } from 'vue';
import _IconHorizontalTidyUp from './icon-horizontal-tidy-up.vue';

const IconHorizontalTidyUp = Object.assign(_IconHorizontalTidyUp, {
  install: (app: App) => {
    app.component(_IconHorizontalTidyUp.name, _IconHorizontalTidyUp);
  }
});

export default IconHorizontalTidyUp;