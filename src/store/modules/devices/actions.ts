import axios from 'axios'
import {Config} from '../../config';
import {
  FETCH_DEVICE_AVAILABILITY,
  FETCH_DEVICE_OPERABILITY,
  FETCH_DEVICES,
  SET_DEVICE_AVAILABILITY,
  SET_DEVICE_OPERABILITY,
  SET_DEVICES
} from '../types/device-types';
import {IDeviceAvailability, IDeviceOperability} from "../../../shared/interfaces/IDeviceAvailability";

const DEVICE_PATH: string = `${Config.API_PATH}inventory/managedObjects`;
const AUTH_HEADER = {'Authorization': Config.API_KEY};
/**
 * Mock data for pie chart, can be replaced when the
 * required rest is accessible
 *
 * @type IDeviceAvailability[]
 */
const mockPieData: IDeviceAvailability[] = [
  {period: 'DAY', value: 100},
  {period: 'WEEK', value: 100},
  {period: 'MONTH', value: 100}];

/**
 * Mock data for bar chart, can be replaced when the
 * required rest is accessible
 *
 * @type IDeviceOperability
 */
const mockBarData: IDeviceOperability = {
  data: [
    {label: '0%', value: 0.01},
    {label: '10%', value: 0.01},
    {label: '20%', value: 0.01},
    {label: '30%', value: 0.01},
    {label: '40%', value: 0.01},
    {label: '50%', value: 0.01},
    {label: '60%', value: 0.01},
    {label: '70%', value: 0.01},
    {label: '80%', value: 0.01},
    {label: '90%', value: 0.01},
    {label: '100%', value: 1}]
};

/**
 * Specified actions for Device Management state module
 */
export const actions = {
  /**
   * Fetches devices from server and set it to the state
   *
   * @param {any} commit - commitment trigger
   * @returns {Promise<AxiosResponse<any>>}
   */
  [FETCH_DEVICES]({commit}) {
    return axios.get(DEVICE_PATH, {headers: AUTH_HEADER})
      .then((response) =>
        commit(SET_DEVICES, response.data.managedObjects))
  },
  /**
   * Fetches availability data for pie charts from server and
   * set it to the state
   *
   * @param {any} commit - commitment trigger
   * @returns {Promise<AxiosResponse<any>>}
   */
  [FETCH_DEVICE_AVAILABILITY]({commit}) {
    commit(SET_DEVICE_AVAILABILITY, mockPieData);
  },

  /**
   * Fetches operability data for bar chart from server
   * and set it to the state
   *
   * @param {any} commit - commitment trigger
   * @returns {Promise<AxiosResponse<any>>}
   */
  [FETCH_DEVICE_OPERABILITY]({commit}) {
    commit(SET_DEVICE_OPERABILITY, mockBarData);
  }

};


