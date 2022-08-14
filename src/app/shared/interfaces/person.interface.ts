
export interface Person {
    name: string;
    favs: Favs[];
  }

export  interface Favs {
    id: number;
    name: string
  }

export interface User{
  gender: string,
  notifications: boolean
}