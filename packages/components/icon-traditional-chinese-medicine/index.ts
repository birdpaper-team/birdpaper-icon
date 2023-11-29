import type { App } from 'vue';
import _IconTraditionalChineseMedicine from './icon-traditional-chinese-medicine.vue';

const IconTraditionalChineseMedicine = Object.assign(_IconTraditionalChineseMedicine, {
  install: (app: App) => {
    app.component(_IconTraditionalChineseMedicine.name, _IconTraditionalChineseMedicine);
  }
});

export default IconTraditionalChineseMedicine;