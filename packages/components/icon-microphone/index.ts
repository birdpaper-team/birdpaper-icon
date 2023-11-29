import type { App } from 'vue';
import _IconMicrophone from './icon-microphone.vue';

const IconMicrophone = Object.assign(_IconMicrophone, {
  install: (app: App) => {
    app.component(_IconMicrophone.name, _IconMicrophone);
  }
});

export default IconMicrophone;