interface ICreateCustomerDTO {
    fullName: string;
    gender: string;
    birth: Date;
    city: string;
    age?: number
    id?: string;
}

export { ICreateCustomerDTO };