/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description: 游戏的启动脚本
*/
import QK from "./QK";
import {Inject} from "../Framework/DI/Atrributes/InjectAttribute";
import IActorManager from "./Inter/IActorManager";
import ActorManager from "./ActorManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    @Inject("IActorManager")  //key 对应 Module中 Bind 时传入的key
    actorManager: IActorManager = null;//由于typescript的特殊性 属性必须要初始化值

    protected onLoad(): void {
        cc.game.addPersistRootNode(this.node);
        QK.instance.init();

        //二种注入方式 可以将当前类注入,也可以直接通过 kernel.get 方法 获取对象ActorManager，这样ActorManager 依赖的属性将自动被注入
        QK.instance.kernel.inject(this);
        let am= QK.instance.kernel.get(ActorManager);

        console.log(this.actorManager.GetPerson().GetName());
        console.log(am.GetPerson().GetName());
    }

}
