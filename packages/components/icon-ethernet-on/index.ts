import type { App } from 'vue';
import _IconEthernetOn from './icon-ethernet-on.vue';

const IconEthernetOn = Object.assign(_IconEthernetOn, {
  install: (app: App) => {
    app.component(_IconEthernetOn.name, _IconEthernetOn);
  }
});

export default IconEthernetOn;