import { Account } from './Account'

export class Bank {
    public id: string
    public accounts: Account[] = []
    public bankCredit: number = 0

    constructor(id: string){
        this.id = id
    }

    addAccount(accountId: string, accountBudget: number):void {
        let newAccount = new Account(accountId, accountBudget, this.id)
        this.accounts.push(newAccount)
    }

    showAccountMoney(): number{
        let totalMoney: number = 0
        for(let i = 0; i<this.accounts.length; i++){
            totalMoney += this.accounts[i].budget
        }
        return totalMoney
    }

    sendMoney(howMany: number, accountSender: Account, accountReciever: Account):void {
        let tax = 1
        if(
            (accountSender.bankName != accountReciever.bankName)&&
            ((accountSender.budget + 100) >= (howMany + tax))){
                accountSender.budget -= howMany + tax
                accountReciever.budget += howMany
                if(accountSender.bankName === this.id){
                    this.bankCredit += tax
                }    
        }
        else {
            if(accountSender.budget - howMany >= -100){
                accountSender.budget -= howMany
                accountReciever.budget += howMany
            } 
        }
    }
}