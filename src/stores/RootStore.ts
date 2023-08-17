interface RootStoreInterface {
    num1: number;
}
export class RootStore implements RootStoreInterface{
    num1: number;
    constructor(){
        this.num1 = 1;
    }
}

