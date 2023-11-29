import type { App } from 'vue';
import _IconReport from './icon-report.vue';

const IconReport = Object.assign(_IconReport, {
  install: (app: App) => {
    app.component(_IconReport.name, _IconReport);
  }
});

export default IconReport;