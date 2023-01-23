export interface Table {
  id?: Number;
  status: string;
  clientsNumber: number;
  products: [
    {
      name: string;
      price: number;
    }
  ];
}
