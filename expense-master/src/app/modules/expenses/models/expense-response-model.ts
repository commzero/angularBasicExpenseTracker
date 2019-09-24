export interface ExpenseResponseModel {

    data: [{

        id: number;

        amount: number;

        desc?: string;

        category: string;

        currency: string;

        date: string;
        
    }];

}