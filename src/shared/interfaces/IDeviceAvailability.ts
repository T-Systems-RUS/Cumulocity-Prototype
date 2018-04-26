/**
 * Device availability interface provides data mapping for availability
 * raw data from server
 *
 * @author Evgenii Ray
 */
export interface IDeviceAvailability {
  period?: string;
  value: number;
  label?: string;
}

/**
 * Device operability interface provides data mapping for operability
 * raw data from server
 *
 * @author Evgenii Ray
 */
export interface IDeviceOperability {
  data: IDeviceAvailability[]
}
