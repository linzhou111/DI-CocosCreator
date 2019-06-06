/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description: 
*/
import {Injectable} from "../Framework/DI/Atrributes/InjectableAttribute";
import IPerson from "./Inter/IPerson";

export default class Superman implements IPerson{
    GetName(): string {
        return "superman";
    }
}
