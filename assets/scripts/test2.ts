import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test2')
export class test2 extends Component {
    start() {

    }

    onClick2()
    {
        console.log( " click in test2222 " )
    }

    update(deltaTime: number) {
        
    }
}

