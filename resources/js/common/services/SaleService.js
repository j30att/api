class SalesService {
    constructor(){

    };

    calcAmount(share, markup, buyin){
        let shareValue = null;
        let amount = null;

        shareValue = buyin * (share / 100);
        amount = shareValue * markup;
        return amount;

    }
}

export {SalesService};