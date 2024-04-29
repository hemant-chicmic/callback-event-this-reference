import { _decorator, Component, Node } from 'cc';
import { test2 } from './test2';
const { ccclass, property } = _decorator;

@ccclass('test1')
export class test1 extends Component {

    @property( {type : Node} )
    img : Node | null = null ;

    start() {
        // this.img.on(Node.EventType.TOUCH_START, this.onClick1, this);

        this.img.on(Node.EventType.TOUCH_START, test2.prototype.onClick2.bind(test2.prototype) , this );
    }


    onClick1() {
        console.log("click in test1");
    }

    update(deltaTime: number) {
        
    }



}

