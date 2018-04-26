import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";
import {IDeviceListNode} from "../../../shared/interfaces/IDeviceListNode";
import {IDeviceAvailability, IDeviceOperability} from "../../../shared/interfaces/IDeviceAvailability";

/**
 * Device State Interface. Encapsulate state of device management
 * data.
 *
 * @author Evgenii Ray
 */
export interface DeviceState {
  devices: Array<IDeviceListNode>;
  availability: IDeviceAvailability[];
  operability: IDeviceOperability;
}

/**
 * Initial state for storage
 */
const initialState: DeviceState = {
  devices: [],
  availability: [],
  operability: {
    data: []
  }
};

export default {
  state: {...initialState},
  mutations,
  actions,
  getters,
}
