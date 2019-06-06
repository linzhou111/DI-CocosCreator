/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import KernelBase from "./KernelBase";
import INinjectModule from "../Inter/INinjectModule";


export default class StandardKernel extends KernelBase {
    constructor(...modules:INinjectModule[]){
        super(modules);
    }
}