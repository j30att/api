class SalesService {
    constructor(){

    };

    calcAmount(share, markup, buyin){
        let shareValue = null;
        let amount = null;

        shareValue = buyin * (share / 100);
        amount = shareValue * markup;

        return Math.round(amount*10)/10;
    }
}

export {SalesService};