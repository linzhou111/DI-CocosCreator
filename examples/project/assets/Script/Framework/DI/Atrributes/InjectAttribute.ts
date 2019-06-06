/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import "../Base/Reflect"
export function Inject(name:any): PropertyDecorator {
    return (target, key) => {
        Reflect.defineMetadata('design:parm',name, target, key);
    };
}