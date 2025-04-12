export type VMStatus = 'RUNNING' | 'PAUSED' | 'STOP';

export interface VirtualMachine {
  displayName: string;
  cpu: number;
  memory: number;
  status: VMStatus;
}