import type { App } from 'vue';
import _IconCertificate from './icon-certificate.vue';

const IconCertificate = Object.assign(_IconCertificate, {
  install: (app: App) => {
    app.component(_IconCertificate.name, _IconCertificate);
  }
});

export default IconCertificate;