/**
 * Table node element interface
 */
export interface IDeviceListNode {
  id: number
  name: string
  connection: ConnectionStatus
  model: string
  serialNumber: string
  regTime:string
  imei:string
}

/**
 * Connections status enum for a device
 */
export enum ConnectionStatus {
  CONNECTED,
  DISCONNECTED
}
