import type { App } from 'vue';
import _IconFingerprint2Line from './icon-fingerprint-2-line.vue';

const IconFingerprint2Line = Object.assign(_IconFingerprint2Line, {
  install: (app: App) => {
    app.component(_IconFingerprint2Line.name, _IconFingerprint2Line);
  }
});

export default IconFingerprint2Line;