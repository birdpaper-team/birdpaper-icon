import type { App } from 'vue';
import _IconWhatsappFill from './icon-whatsapp-fill.vue';

const IconWhatsappFill = Object.assign(_IconWhatsappFill, {
  install: (app: App) => {
    app.component(_IconWhatsappFill.name, _IconWhatsappFill);
  }
});

export default IconWhatsappFill;