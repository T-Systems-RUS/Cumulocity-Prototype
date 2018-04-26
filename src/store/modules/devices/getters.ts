import {GET_DEVICE_AVAILABILITY, GET_DEVICE_OPERABILITY, GET_DEVICES} from "../types/device-types";
import {DeviceState} from "./index";
import {IDeviceAvailability} from "../../../shared/interfaces/IDeviceAvailability";
import {ChartData} from "chart.js";

/**
 * Specified getters for device state data
 */
export const getters = {

  /**
   * Gets the list of available devices for user
   *
   * @param {DeviceState} state - current device state
   * @returns {Array<IDeviceListNode>} - device list
   */
  [GET_DEVICES](state: DeviceState) {
    return state.devices;
  },

  /**
   * Gets availability data for pie charts
   *
   * @param {DeviceState} state   - current device state
   * @returns {Chart.ChartData[]} - chart data to apply for pie charts
   */
  [GET_DEVICE_AVAILABILITY](state: DeviceState): ChartData[] {
    return mapPieChartData(state.availability);
  },

  /**
   * Gets operability data for bar charts
   *
   * @param {DeviceState} state
   * @returns {Chart.ChartData}
   */
  [GET_DEVICE_OPERABILITY](state: DeviceState): ChartData {
    return mapBarChartData(state.operability.data);
  }
};

/**
 * Maps raw data to the {@link ChartData} model of ChartJs chart
 *
 * @param {IDeviceAvailability[]} availability - availability raw data to map
 * @returns {Chart.ChartData[]}                - mapped pie chart data
 */
function mapPieChartData(availability: IDeviceAvailability[]): ChartData[] {
  const color: string = '#5CB85C';
  return availability.map(avl => {
    return {
      labels: ['Availability'],
      datasets: [{borderWidth: 0, backgroundColor: color, data: [avl.value]}]
    }
  })
}

/**
 * Maps raw data to the {@link ChartData} model of ChartJs bar chart
 *
 * @param {IDeviceAvailability[]} operability - availability raw data to map
 * @returns {Chart.ChartData[]}                - mapped bar chart data
 */
function mapBarChartData(operability: IDeviceAvailability[]): ChartData {
  return {
    labels: operability.map(val => val.label),
    datasets: [
      {
        borderWidth: 2,
        hoverBackgroundColor: 'rgb(133,202,133)',
        backgroundColor: 'rgba(133,202,133,0.8)',
        data: operability.map(val => val.value)
      }
    ]
  };
}
