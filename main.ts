import { Account } from './Account'
import { Bank } from './Bank'

let bank = new Bank("BNL")
let bank2 = new Bank ("Fineco")
bank.addAccount("Giuseppe", 5000)
let account1: Account = bank.accounts[0]
bank2.addAccount("Giovanni", 1000)
let account2: Account = bank2.accounts[0]
bank.sendMoney(5099, account1, account2)
console.log(bank.accounts)
console.log(bank.bankCredit)