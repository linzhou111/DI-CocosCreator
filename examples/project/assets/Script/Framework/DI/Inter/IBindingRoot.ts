/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import {IBindingToSyntax} from "./IBindingToSyntax";

export default interface IBindingRoot{
    bind(key:string):IBindingToSyntax;
    unbind<T>():void;
}