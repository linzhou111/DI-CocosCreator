/**
 * @author GaryQK
 * @date 2019/6/5
 * @Description: 框架的一个入口
*/
import IKernel from "../Framework/DI/Inter/IKernel";
import StandardKernel from "../Framework/DI/Core/StandardKernel";
import SystemModule from "./SystemModule";

export default class QK {
    private static _instance: QK = null;

    public static get instance(): QK {
        if (this._instance === null) {
            this._instance = new QK();
        }
        return this._instance;
    }

    constructor() {
        if (QK._instance) {
            console.error("Use QKFramework.instance");
        }
        QK._instance = this;
    }

    private _kernel:IKernel;

    get kernel():IKernel{
        return this._kernel;
    }

    init(){
        this._kernel=new StandardKernel(new SystemModule());//这里可以传入多个 Module（根据需要 可以将注入通过Module进行分组管理）
    }
}