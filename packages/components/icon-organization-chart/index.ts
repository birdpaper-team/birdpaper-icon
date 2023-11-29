import type { App } from 'vue';
import _IconOrganizationChart from './icon-organization-chart.vue';

const IconOrganizationChart = Object.assign(_IconOrganizationChart, {
  install: (app: App) => {
    app.component(_IconOrganizationChart.name, _IconOrganizationChart);
  }
});

export default IconOrganizationChart;