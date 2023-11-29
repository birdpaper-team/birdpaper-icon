import type { App } from 'vue';
import _IconRadioNanny from './icon-radio-nanny.vue';

const IconRadioNanny = Object.assign(_IconRadioNanny, {
  install: (app: App) => {
    app.component(_IconRadioNanny.name, _IconRadioNanny);
  }
});

export default IconRadioNanny;