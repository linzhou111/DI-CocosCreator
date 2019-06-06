/**
 * @author GaryQK
 * @date 2019/6/5 
 * @Description: 
*/
import IHaveKernel from "./IHaveKernel";
import IKernel from "./IKernel";
import ISyntax from "./ISyntax";

export default interface INinjectModule extends IHaveKernel{
    readonly name:string;
    onLoad(kernel: IKernel,syntax:ISyntax):void;
    onUnload(kernel:IKernel):void;
}