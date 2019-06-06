/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import INinjectModule from "../Inter/INinjectModule";
import IKernel from "../Inter/IKernel";
import BindingRoot from "./BindingRoot";
import ISyntax from "../Inter/ISyntax";

export default abstract class NinjectModule extends BindingRoot implements  INinjectModule{
    private _kernel: IKernel;
    get kernel(): IKernel {
        return this._kernel;
    }
    // private _name: string;
    // get name():string{
    //     return this._name;
    // }
    abstract name:string;

    private _syntax:ISyntax;
    get syntax():ISyntax{
        return this._syntax;
    }
    onLoad(kernel: IKernel,syntax:ISyntax): void {
        this._kernel=kernel;
        this._syntax=syntax;
        this.load();
    }

    onUnload(kernel: IKernel): void {
        this.unload();
        this._kernel=null;
    }

    public abstract load():void;

    public unload():void{}

}