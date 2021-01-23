import {request} from "./request";

export function getDetail(iid) {
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
}

export function getRecommends(){
    return request({
        url:"/recommend"
    })
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.desc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
    }
}
