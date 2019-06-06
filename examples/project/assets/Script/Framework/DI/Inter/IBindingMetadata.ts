/**
 * @author GaryQK
 * @date 2019/6/5 
 * @Description: 
*/
export  default interface IBindingMetadata{
    name:string;
    has(key:string):boolean;
    get<T>(key:string):T;
    get<T>(key:string,defaultValue:T):T;
    set(key:string,value:any);
}