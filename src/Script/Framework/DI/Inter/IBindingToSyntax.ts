/**
 * @author GaryQK
 * @date 2019/6/5 
 * @Description: 
*/
import IHaveBinding from "./IHaveBinding";
import IHaveKernel from "./IHaveKernel";

export interface IBindingSyntax extends IHaveBinding, IHaveKernel{
    get();
}

export interface IBindingToSyntax extends IBindingSyntax{
    to<T>(c:{new():T},singleton?:boolean);

}