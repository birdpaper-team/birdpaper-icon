import type { App } from 'vue';
import _IconNetworkDrive from './icon-network-drive.vue';

const IconNetworkDrive = Object.assign(_IconNetworkDrive, {
  install: (app: App) => {
    app.component(_IconNetworkDrive.name, _IconNetworkDrive);
  }
});

export default IconNetworkDrive;