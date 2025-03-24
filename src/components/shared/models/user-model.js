export class UserModel {
    name = '';
    constructor(name) {
        this.name = name;
    }

    updateUser(name) {
        this.name = name;
    }
}
