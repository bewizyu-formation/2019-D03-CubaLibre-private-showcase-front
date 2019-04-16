export class Event {
    constructor(public date: Date,
        public maxConfirmed: number,
        public artistName: string,
        public confirmedUserList?: string[],
        public invitatedUserList?: string[],
        public organiserUserName?: string) { }
}
