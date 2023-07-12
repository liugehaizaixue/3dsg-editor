
<template>
    <!-- jtopo用于渲染的div -->
    <div id="divId" style="height:600px;width:100%px;border:1px solid gray"></div>
</template>

<script>
    import {Stage, Layer, Node, Link, VERSION} from '@jtopo/core';

    function initCreate(){
        var stage = new Stage('divId');
        var layer = new Layer('default');
        stage.addChild(layer);
        
        stage.show();

        console.log('version', VERSION);

        // 方便控制台调测
        window.stage = stage;
        window.layer = layer;

        return {
            stage, layer
        };
    }

    function drawData(layer){
        var fromNode = new Node('From', -100, 0, 40, 40);
        var toNode   = new Node('To',   100, 0, 40, 40);

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

    // 可以绑定要绘制的数据，但别绑定jtopo对象
    export default {
        mounted(){
            let {layer} = initCreate();
            drawData(layer); 
        }
    }

</script>

