/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import {IBinding} from "../Inter/IBinding";

export default class Binding implements IBinding {
    get key(){
        return this._key;
    }
    constructor(private _key:any){

    }
}