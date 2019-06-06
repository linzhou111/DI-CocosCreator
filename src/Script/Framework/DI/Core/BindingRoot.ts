/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import IBindingRoot from "../Inter/IBindingRoot";
import Binding from "./Binding";
import {IBindingToSyntax} from "../Inter/IBindingToSyntax";
import IHaveSyntax from "../Inter/IHaveSyntax";

export default abstract class BindingRoot implements IBindingRoot,IHaveSyntax {

    abstract get syntax();

    bind(key:string): IBindingToSyntax{
        let binding=new Binding(key);
        return this.syntax.createSyntax(binding);
    }
    unbind<T>(): void {
        this._unbind(null);
    }
    protected abstract _unbind(service: any): void;
}
