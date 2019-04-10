export class Artist {
  constructor(public artistName: string,
              public shortDescription: string,
              public description: string,
              public website: string,
              public phone: string,
              public address: string,
              public rating: number,
              public picture: any,
              public voteNumber: number,
              private id?: number) {}
}
