export interface IPackage {
  id?: number;
  clientname: string;
  image?: string;
  quantity: number;
  weight: number;
  deliveryday: Date;
  address: string;
  status: string;
  userId?: number;
}
