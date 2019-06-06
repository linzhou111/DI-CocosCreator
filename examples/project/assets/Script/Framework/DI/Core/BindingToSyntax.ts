/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import {IBinding} from "../Inter/IBinding";
import IKernel from "../Inter/IKernel";
import {IBindingToSyntax} from "../Inter/IBindingToSyntax";

export  default class  BindingToSyntax implements IBindingToSyntax {
    private value:any=null;
    private c:{new()}=null;
    private isSingleton:boolean=false;

    constructor(private _binding:IBinding,private _kernel: IKernel){
    }
    get kernel(){
        return this._kernel;
    }
    get binding(){
        return this._binding;
    }
    to<T>(c:{new():T},singleton:boolean=false) {
        //Reflect.hasMetadata('design:type',c)
        if(singleton){
            this.isSingleton=singleton;
            this.value=new c();
        }
        this.c=c;
    }
    get(){
        let result=this.isSingleton&&this.value?this.value:new this.c();
        if(Reflect.hasMetadata('design:type',this.c)){
            this.kernel.inject(result);
        }
        return result;
    }
}