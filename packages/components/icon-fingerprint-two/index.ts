import type { App } from 'vue';
import _IconFingerprintTwo from './icon-fingerprint-two.vue';

const IconFingerprintTwo = Object.assign(_IconFingerprintTwo, {
  install: (app: App) => {
    app.component(_IconFingerprintTwo.name, _IconFingerprintTwo);
  }
});

export default IconFingerprintTwo;