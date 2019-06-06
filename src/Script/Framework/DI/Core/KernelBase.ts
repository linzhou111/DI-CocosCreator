/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import IKernel from "../Inter/IKernel";
import {IBinding} from "../Inter/IBinding";
import INinjectModule from "../Inter/INinjectModule";
import {IBindingSyntax, IBindingToSyntax} from "../Inter/IBindingToSyntax";
import BindingToSyntax from "./BindingToSyntax";
import ISyntax from "../Inter/ISyntax";

export default class  KernelBase  implements ISyntax, IKernel {

    private readonly _modules:Map<string, INinjectModule>  = new Map<string, INinjectModule>();
    private readonly _bindings:Map<string,IBindingSyntax>=new Map<string,IBindingSyntax>();
    constructor(modules:INinjectModule[]){
        this.loadModules(modules);
    }

    get<T>(c:{new(...params):T},...constructParms): T {
        let result=new c(...constructParms);
        if(Reflect.hasMetadata('design:type',c)){
            let pros= Object.getOwnPropertyNames(result);
            for (const pro of pros) {
                if(Reflect.hasMetadata('design:parm',result, pro)){
                    let key=Reflect.getMetadata('design:parm',result, pro);
                    if(this._bindings.has(key)){
                        let syntax=this._bindings.get(key);
                        result[pro]=syntax.get();
                    }
                }
            }
        }
        return result;
    }
    inject<T>(t: T) {
        let pros= Object.getOwnPropertyNames(t);
        for (const pro of pros) {
            if(Reflect.hasMetadata('design:parm',t, pro)){
                let key=Reflect.getMetadata('design:parm',t, pro);
                if(this._bindings.has(key)){
                    let syntax=this._bindings.get(key);
                    t[pro]=syntax.get();
                }
            }
        }
        return t;
    }

    _unbind(service: any): void {
    }

    loadModules(modules:INinjectModule[]){
        modules.forEach((module)=>{
            if(!this._modules.has(module.name)){
                module.onLoad(this,this);
                this._modules.set(module.name,module);
            }
        });
    }

    createSyntax(binding: IBinding): IBindingToSyntax {
        let result=null;
        if(!this._bindings.has(binding.key)){
            result=new BindingToSyntax(binding,this);
            this._bindings.set(binding.key,result);
        }
        return result;
    }
}