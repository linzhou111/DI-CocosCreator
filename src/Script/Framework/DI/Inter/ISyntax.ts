/**
 * @author GaryQK
 * @date 2019/6/5 
 * @Description: 
*/
import {IBinding} from "./IBinding";
import {IBindingToSyntax} from "./IBindingToSyntax";

export default interface ISyntax{
     createSyntax(binding: IBinding): IBindingToSyntax;
}