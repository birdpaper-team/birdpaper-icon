import type { App } from 'vue';
import _IconFileDate from './icon-file-date.vue';

const IconFileDate = Object.assign(_IconFileDate, {
  install: (app: App) => {
    app.component(_IconFileDate.name, _IconFileDate);
  }
});

export default IconFileDate;