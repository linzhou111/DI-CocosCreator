/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import NinjectModule from "../Framework/DI/Core/NinjectModule";
import Superman from "./Superman";
import ActorManager from "./ActorManager";

export default class SystemModule extends NinjectModule {
    get name(){
        return "SystemModule";
    }
    protected _unbind(service: any): void {
         
    }

    load(): void {
        this.bind("IPerson").to(Superman);
        this.bind("IActorManager").to(ActorManager,true);
    }
}