/**
 * @author GaryQK
 * @date 2019/6/5 
 * @Description: 
*/
export default interface IKernel {
    /*
     * 获取对象
     */
    get<T>(c:{new(...params):T},...inputParms):T;
    /*
     * 将现有对象进行属性注入
     */
    inject<T>(t:T);
}