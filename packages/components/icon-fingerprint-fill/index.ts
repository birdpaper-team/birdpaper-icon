import type { App } from 'vue';
import _IconFingerprintFill from './icon-fingerprint-fill.vue';

const IconFingerprintFill = Object.assign(_IconFingerprintFill, {
  install: (app: App) => {
    app.component(_IconFingerprintFill.name, _IconFingerprintFill);
  }
});

export default IconFingerprintFill;