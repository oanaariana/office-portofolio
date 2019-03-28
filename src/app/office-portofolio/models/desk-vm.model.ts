// Interface for total nr of desks.
export interface Desk {
  dateTime?: Date;
  value: number;
  building: {
   id?: number;
  };
}
