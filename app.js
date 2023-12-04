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

// Ext.onReady(function(){
//     Ext.create("Ext.panel.Panel", {
//         width: 500,
//         height: 500,
//         title: '6강 ExtJS 타이틀',
//         renderTo: Ext.getBody()
//     })
// })

Ext.onReady(function(){
    Ext.create("Ext.panel.Panel", {
        width: 500,
        height: 500,
        rednerTo: Ext.getBody(),
        layout: 'fit',
        items: [
            {
                xtye: 'grid',
                plugins: 'cellediting',
                columns: [
                    {
                        text: '텍스트1',
                        dataIndex: 'text1',
                        editor:
                        {
                            xtype: 'textfield'
                        }
                    },
                    {
                        text: '텍스트2',
                        dataIndex: 'text2',
                        editor:
                        {
                            xtype: 'textfield'
                        }
                    },
                    {
                        text: '텍스트3',
                        dataIndex: 'text3',
                        editor:
                        {
                            xtype: 'textfield'
                        }
                    }
                ],
                store: 
                {
                    autoLoad: true,
                    fields: ['id', 'text1', 'text2', 'text3'],
                    proxy:
                    {
                        type: 'ajax',
                        api:
                        {
                            create: "http://localhost:8080/crud/insert.jsp",
                            read: "http://localhost:8080/crud/select.jsp",
                            udpate: "http://localhost:8080/crud/update.jsp",
                            destroy: "http://localhost:8080/crud/delete.jsp"
                        },
                        reader:
                        {
                            type: 'json',
                            rootProperty: 'data',
                            totalProperty: 'total'
                        },
                        writer: 
                        {
                            type: 'json',
                            rootProperty: 'data',
                            writeAllFields: true,
                            encode: true
                        }
                    }
                },
                tbar:
                [
                    {
                        xtype: 'button',
                        text: '등록',
                        handler: function(btn){
                            // 1. store 찾기
                            // ExtJS - up(컴포넌트명 or itemId) / down
                            var store = btn.up("grid").getStore();
                            
                            var newRec = {
                                text1: '',
                                text2: '',
                                text3: ''
                            }
                            store.add(newRec);
                            // store.insert(0, newRec);
                        }
                    },
                    {
                        xtype: 'button',
                        text: '삭제',
                        handler: function(btn){
                            var store = btn.up("grid").getStore();
                            var removeRec = btn.up("grid").getSelection();
                            
                            store.remove(removeRec);
                        }
                    },
                    {
                        xtype: 'button',
                        text: '적용',
                        handler: function(btn){
                            var store = btn.up("grid").getStore();
                                                        
                            store.sync({ // redirect같은 느낌
                                callback: function(){
                                    store.reload();
                                }
                            });
                        }
                    }
                ],
                bbar: 
                {
                    xtype: 'pagingtoolbar',
                    displayInfo: true
                }
            }
        ]
    })    
});









































