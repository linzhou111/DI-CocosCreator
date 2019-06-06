/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description:
*/
import "../Base/Reflect"
export function Injectable(): ClassDecorator {
    return (target) => {
        Reflect.defineMetadata('design:type',"", target);
    };
}