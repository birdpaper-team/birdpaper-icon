import type { App } from 'vue';
import _IconPhoneVideoCall from './icon-phone-video-call.vue';

const IconPhoneVideoCall = Object.assign(_IconPhoneVideoCall, {
  install: (app: App) => {
    app.component(_IconPhoneVideoCall.name, _IconPhoneVideoCall);
  }
});

export default IconPhoneVideoCall;