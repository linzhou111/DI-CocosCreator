/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description: 
*/
import IActorManager from "./Inter/IActorManager";
import {Injectable} from "../Framework/DI/Atrributes/InjectableAttribute";
import {Inject} from "../Framework/DI/Atrributes/InjectAttribute";
import IPerson from "./Inter/IPerson";

@Injectable()//需要注入的类上必须要添加此特性
export default class ActorManager implements IActorManager{

    @Inject("IPerson")
    private person:IPerson=null;

    GetPerson(): IPerson {
        return this.person;
    }

}