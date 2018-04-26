import {SET_DEVICE_AVAILABILITY, SET_DEVICE_OPERABILITY, SET_DEVICES} from "../types/device-types";
import {DeviceState} from "./index";
import {ConnectionStatus, IDeviceListNode} from "../../../shared/interfaces/IDeviceListNode";
import {IDeviceAvailability, IDeviceOperability} from "../../../shared/interfaces/IDeviceAvailability";

export const mutations = {
  [SET_DEVICES](state: DeviceState, devices: Object) {
    state.devices = mapObjToDevices(devices);
  },
  [SET_DEVICE_AVAILABILITY](state: DeviceState, availability: IDeviceAvailability[]) {
    state.availability = availability;
  },
  [SET_DEVICE_OPERABILITY](state: DeviceState, operability: IDeviceOperability) {
    state.operability = operability;
  },
};

function mapObjToDevices(devices: any): Array<IDeviceListNode> {
  return devices.filter(obj => Boolean(obj.name))
    .map(obj => {
      return {
        id: obj.id,
        name: obj.name,
        connection: ConnectionStatus.DISCONNECTED,
        model: obj.c8y_Hardware.model,
        serialNumber: obj.c8y_Hardware.serialNumber,
        regTime: obj.creationTime,
        imei: obj.c8y_Mobile.imei
      };
    })
}







