import type { App } from 'vue';
import _IconFingerprintLine from './icon-fingerprint-line.vue';

const IconFingerprintLine = Object.assign(_IconFingerprintLine, {
  install: (app: App) => {
    app.component(_IconFingerprintLine.name, _IconFingerprintLine);
  }
});

export default IconFingerprintLine;