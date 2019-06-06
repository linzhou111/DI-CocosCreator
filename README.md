# DI-CocosCreator
This is a lightweight dependency injection framework  for CocosCreator

## How to use?

First,you should have an interface and an instance which implements the interface,like this:

>**IPersion**:
```
export  default interface IPerson{
    GetName() :string;
}
```
>**Superman**
```
export default class Superman implements IPerson{
    GetName(): string {
        return "superman";
    }
}
```
Then,you need a module which extends **NinjectModule** to bind **IPerson** to **Superman**,you can use many different module to manage different binding,like this one **SystemModule**:
```
export default class SystemModule extends NinjectModule {
    get name(){
        return "SystemModule";
    }
    protected _unbind(service: any): void {
         
    }

    load(): void {
        this.bind("IPerson").to(Superman,true);//The second parameter means the instance is a singleton.
    }
}
```
Then Third,you should  new a **StandardKernel** to use **SystemModule**,like this:
```
let kernel=new StandardKernel(new SystemModule());//this method can input more than one module
```
if we have a **ActorManager** class which have a **person** property that need to be injected:
```
@Injectable()//This attribute means this class can be injected.
export default class ActorManager implements IActorManager{

    @Inject("IPerson")
    private person:IPerson=null;//must set a default value

    GetPerson(): IPerson {
        return this.person;
    }

}
```
Then,we should use **StandardKernel**'s instance to get **ActorManager**'s instance:
```
let actorManager=kernel.get(ActorManager);
console.log(actorManager.GetPerson().GetName());//"superman"
```
more usage method please see the example.
