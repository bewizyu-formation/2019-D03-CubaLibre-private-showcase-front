export class Event {
    constructor(public date: Date,
        public artistName: string,
        public confirmedUserList: string[],
        public invitatedUserList: string[],
        public organiser: string,
        public maxConfirmed: number) { }

}