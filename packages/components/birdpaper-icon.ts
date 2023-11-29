import type { App, Plugin } from 'vue';
import IconCodeSLine from './icon-code-s-line';
import IconCodeSSlashLine from './icon-code-s-slash-line';
import IconCopyleftLine from './icon-copyleft-line';
import IconCopyrightLine from './icon-copyright-line';
import IconCss3Line from './icon-css3-line';
import IconDashboardLine from './icon-dashboard-line';
import IconDeleteBinLine from './icon-delete-bin-line';
import IconDiscLine from './icon-disc-line';

const icons: Record<string, Plugin> = {
  IconCodeSLine,
  IconCodeSSlashLine,
  IconCopyleftLine,
  IconCopyrightLine,
  IconCss3Line,
  IconDashboardLine,
  IconDeleteBinLine,
  IconDiscLine
};

const install = (app: App) => {
  for (const key of Object.keys(icons)) {
    app.use(icons[key]);
  }
};

const BpVueIcon = {
  ...icons,
  install
};

export default BpVueIcon;
