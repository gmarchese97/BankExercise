import { Bank } from './Bank'

export class Account {
    public id: string
    public budget: number
    public bankName: string
    constructor (id: string, budget: number, bankId: string) {
        this.id = id 
        this.budget = budget
        this.bankName = bankId
    }
/*
    sendMoney(howMany: number, otherAccount: Account, bank: Account):void {
        let tax: number = (howMany * 5)/100
        howMany += tax
        if(this.budget >= howMany){
            this.budget -= howMany
            howMany -= tax
            otherAccount.budget += howMany
            bank.budget += tax
            this.transactions.push({accountId: otherAccount.id, money: -(howMany+tax)})
            otherAccount.transactions.push({accountId: this.id, money: howMany})
            bank.transactions.push({
                senderId: this.id, amountSender: -(howMany+tax),
                recieverId: otherAccount.id, amountReciever: howMany,
                bankId: bank.id, bankLoot: tax})
        }
    }

    showTransaction():void {
        console.log(this.transactions)
    } */

}