import type { App } from 'vue';
import _IconSalesReport from './icon-sales-report.vue';

const IconSalesReport = Object.assign(_IconSalesReport, {
  install: (app: App) => {
    app.component(_IconSalesReport.name, _IconSalesReport);
  }
});

export default IconSalesReport;