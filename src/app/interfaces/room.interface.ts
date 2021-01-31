import { Measurement } from './measurement.interface';
export interface Room {
  id: number;
  name: string;
  temperature: string;
  latestMeasurements: Array<Measurement>;
}
