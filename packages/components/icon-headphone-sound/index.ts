import type { App } from 'vue';
import _IconHeadphoneSound from './icon-headphone-sound.vue';

const IconHeadphoneSound = Object.assign(_IconHeadphoneSound, {
  install: (app: App) => {
    app.component(_IconHeadphoneSound.name, _IconHeadphoneSound);
  }
});

export default IconHeadphoneSound;