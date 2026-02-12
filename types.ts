
export enum AppMode {
  PRESENTATION = 'PRESENTATION',
  DESIGN_SYSTEM = 'DESIGN_SYSTEM'
}

export enum TimerStatus {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  PAUSED = 'PAUSED',
  EXPIRED = 'EXPIRED'
}

export interface TimerState {
  totalSeconds: number;
  remainingSeconds: number;
  status: TimerStatus;
}
