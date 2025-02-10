export class InfraDataClasss {
    constructor(
        public id: number,
        public title: string,
        public completed: boolean,
        public companyname?: string,
        public address?: string,
        public name?: string,
        public email?: string,
        public firstname?: string,
        public lastname?: string,
        public time?: string,
        public date?: string,
        public month?: string,
        public description?: string,
        public descriptionnnnnn?: string,
    ) { }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}
