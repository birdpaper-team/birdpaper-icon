import type { App } from 'vue';
import _IconPhoneCall from './icon-phone-call.vue';

const IconPhoneCall = Object.assign(_IconPhoneCall, {
  install: (app: App) => {
    app.component(_IconPhoneCall.name, _IconPhoneCall);
  }
});

export default IconPhoneCall;