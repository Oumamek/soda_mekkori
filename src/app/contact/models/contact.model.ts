export class Contact {
    firstname: string;
    lastname: string;
    age: string;
    email: string;
    commentaire!: string;

    public constructor(firstname: string,lastname: string,age: string,email: string,commentaire: string) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.email=email;
        this.commentaire=commentaire;
    }
}