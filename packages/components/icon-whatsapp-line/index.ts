import type { App } from 'vue';
import _IconWhatsappLine from './icon-whatsapp-line.vue';

const IconWhatsappLine = Object.assign(_IconWhatsappLine, {
  install: (app: App) => {
    app.component(_IconWhatsappLine.name, _IconWhatsappLine);
  }
});

export default IconWhatsappLine;