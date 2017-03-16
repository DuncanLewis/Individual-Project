export class Project {

    //ToDo: add in the rest of the properties of a project here
    id: string;
    name: string = '';
    status: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
