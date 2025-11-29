export interface Reservation {
  clientName: string;
  area: string;
  time: string;
  people: number;
  createdAt: Date;
}

export interface Area {
  id: string;
  name: string;
  description: string;
  emoji: string;
}