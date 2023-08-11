import {Stage, Layer, Node, Link} from '@jtopo/core';
import { dataService } from './DataService';

/**
 * 只关心绘制
 * 
 * 不关心数据加载和处理
 * 
 * 依赖一个div对象
 */
class TopoManager{
    stage;
    layer;

    /**
     * 初始化，创建一个空画布
     * @param {*} divObj 
     */
    init(divObj){
        const stage = new Stage(divObj);
        const layer = new Layer('default');
        stage.addChild(layer);
        stage.show();

        this.stage = stage;
        this.layer = layer;   
        
        // 加载数据并绘制
        let data = dataService.loadData();
        this.render(data);
    }

    /**
     * 根据传入的业务数据制图
     * @param {*} data 业务数据
     */
    render(data){
        const layer = this.layer;
        
        //TODO: 根据data 来绘制
        const fromNode = new Node('From', -100, 0, 40, 40);
        const toNode   = new Node('To',   100, 0, 40, 40);

        // 设置节点填充颜色
        fromNode.css({
            fillStyle: 'orange',
            font: 'bold 12px arial',
        });

        toNode.css({
            fillStyle: 'blue',
        });

        var link = new Link('Link',fromNode,toNode);
        layer.addChild(link);

        fromNode.on('mousedown', (event)=>{
            fromNode.text = 'mousedown';
        });

        layer.addChild(fromNode);
        layer.addChild(toNode);
    }
}

export const topoManager = new TopoManager();