/**
 * $(document).ready(function({
 *  alert();
 * }))
 */

// 미리 정의된 함수들을 가져다 쓰는 형식임

// Ext.onReady(function(){
// 	Ext.Msg.alert("타이틀","헬로월드");
// })

// Ext.onReady(function(){
//     Ext.create("Ext.container.ViewPort", {
//         layout: 'fit',
//         renderTo: Ext.getBody(),
//         border: true,
//         items: [{
//             xtype: 'panel'
//         }]
//     })
// })

// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width: 300,
//         height: 300,
//         renderTo: Ext.getBody(),
//         border: true,
//         items: [{
//             xtype: 'textfield'
//         }, 
//         {
//             xtype: 'button',
//             text: '버튼'
//         }]
//     })
// })


// Ext.onReady(function(){
//     Ext.create("Ext.container.Viewport", {
//         renderTo: Ext.getBody(),
//         layout: 'border',
//         border: true,
//         items: [
//             {
//                 xtype: 'panel',
//                 flex: 1,
//                 region: 'north',
//                 title: '패널 north',
//                 layout: 'border',
//                 items: [
//                     {
//                         xtype: 'panel',
//                         border: true,
//                         felx: 1,
//                         region: 'west'
//                     },
//                     {
//                         xtype: 'panel',
//                         border: true,
//                         felx: 1,
//                         region: 'center'
//                     },
//                     {
//                         xtype: 'panel',
//                         border: true,
//                         felx: 1,
//                         region: 'east'
//                     }
//                 ]
//             },
//             {
//                 xtype: 'panel',
//                 flex: 1,
//                 region: 'center',
//                 title: '패널 center'
//             },
//             {
//                 xtype: 'panel',
//                 flex: 1,
//                 region: 'east',
//                 title: '패널 east'
//             },
//             {
//                 xtype: 'panel',
//                 flex: 1,
//                 region: 'west',
//                 title: '패널 west'
//             }
//         ]
//     })
// })

// Ext.onReady(function(){
//     Ext.create("Ext.container.Viewport", {
//         renderTo: Ext.getBody(),
//         layout: 'border',
//         border: true,
//         items: [
//             {
//                 xtype: 'panel',
//                 border: true,
//                 flex: 1,
//                 region: 'north',
//                 layout: 'border',
//                 items: [
//                     {
//                         xtype: 'panel',
//                         border: true,
//                         flex: 1,
//                         region: 'west'
//                     },
//                     { 
//                         xtype: 'panel',
//                         border: true,
//                         flex: 1,
//                         region: 'center'
//                     }
//                 ]
//             },
//             {
//                 xtype: 'panel',
//                 border: true,
//                 flex: 1,
//                 region: 'center'
//             }
//         ]
//     })
// })

// north, center, south, east, west

Ext.onReady(function(){
    Ext.create("Ext.panel.Panel", {
        width: 500,
        height: 500,
        title: '6강 ExtJS 타이틀',
        renderTo: Ext.getBody()
    })
})








