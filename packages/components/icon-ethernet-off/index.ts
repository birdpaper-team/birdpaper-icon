import type { App } from 'vue';
import _IconEthernetOff from './icon-ethernet-off.vue';

const IconEthernetOff = Object.assign(_IconEthernetOff, {
  install: (app: App) => {
    app.component(_IconEthernetOff.name, _IconEthernetOff);
  }
});

export default IconEthernetOff;