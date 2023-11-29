import type { App } from 'vue';
import _IconHdmiCable from './icon-hdmi-cable.vue';

const IconHdmiCable = Object.assign(_IconHdmiCable, {
  install: (app: App) => {
    app.component(_IconHdmiCable.name, _IconHdmiCable);
  }
});

export default IconHdmiCable;