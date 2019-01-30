export class Account {
    public id: string
    public budget: number
    public bankName: string
    constructor (id: string, budget: number, bankId: string) {
        this.id = id 
        this.budget = budget
        this.bankName = bankId
    }
}