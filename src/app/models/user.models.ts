export class User {
    document: string;
    name: string;
    lastName: string;
    phone: string;
    email: string | null;
    password: string;
    id_rol: number; 

    constructor({
        document = '', 
        name = '', 
        lastName = '', 
        phone = '', 
        email = '',  
        password = '',
        id_rol = 0,
    }: {
        document?: string,
        name?: string,
        lastName?: string,
        phone?: string,
        email?: string,
        password?: string,
        id_rol?: number,
    } = {}) {
        this.document = document;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.id_rol = id_rol;
    }
}