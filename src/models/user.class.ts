export class User {
    public firstName: string;
    public lastName: string;
    public street: string;
    public postCode: number;
    public city: string;
    public country: string;
    public birthDate: number;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstname: '';
        this.lastName = obj ? obj.lastName: '';
        this.street = obj ? obj.street: '';
        this.postCode = obj ? obj.postCode: '';
        this.city = obj ? obj.city: '';
        this.country = obj ? obj.country: '';
        this.birthDate = obj ? obj.birthDate: '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            street: this.street,
            postCode: this.postCode,
            city: this.city,
            country: this.country,
            birthDate: this.birthDate,
        }
    }
}