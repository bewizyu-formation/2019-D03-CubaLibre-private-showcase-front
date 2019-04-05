export class Artist {
  constructor(public artistName: string,
              public description: string,
              public website: string,
              public phone: string,
              public address: string,
              public rating: number,
              public picture: any,
              private id?: number) {}
}
