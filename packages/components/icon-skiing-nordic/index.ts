import type { App } from 'vue';
import _IconSkiingNordic from './icon-skiing-nordic.vue';

const IconSkiingNordic = Object.assign(_IconSkiingNordic, {
  install: (app: App) => {
    app.component(_IconSkiingNordic.name, _IconSkiingNordic);
  }
});

export default IconSkiingNordic;