import type { App } from 'vue';
import _IconPhoneOutgoing from './icon-phone-outgoing.vue';

const IconPhoneOutgoing = Object.assign(_IconPhoneOutgoing, {
  install: (app: App) => {
    app.component(_IconPhoneOutgoing.name, _IconPhoneOutgoing);
  }
});

export default IconPhoneOutgoing;