export interface IGetNews {
  image: string;
  titleRU: string;
  titleKG: string;
  titleTR: string;
  describtionRU: string;
  describtionKG: string;
  describtionTR: string;
  createdAt: string;
  updatedAt: string;
  newsId: number;
}

export type TitleKeys = "titleRU" | "titleKG" | "titleTR";
