export interface ExpenseRequestModel {

    id: number;

    amount: number;

    desc?: string;

    category: string;

    currency: string;
    
    date: string;

}