import type { App } from 'vue';
import _IconFingerprintThree from './icon-fingerprint-three.vue';

const IconFingerprintThree = Object.assign(_IconFingerprintThree, {
  install: (app: App) => {
    app.component(_IconFingerprintThree.name, _IconFingerprintThree);
  }
});

export default IconFingerprintThree;