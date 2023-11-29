import type { App } from 'vue';
import _IconFingerprint2Fill from './icon-fingerprint-2-fill.vue';

const IconFingerprint2Fill = Object.assign(_IconFingerprint2Fill, {
  install: (app: App) => {
    app.component(_IconFingerprint2Fill.name, _IconFingerprint2Fill);
  }
});

export default IconFingerprint2Fill;