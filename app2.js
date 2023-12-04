Ext.onReady(function(){
    // Ext.Ajax.request({
    //     url: 'https://localhost:8080/paging.jsp',
    //     method: 'POST',
    //     params: { // 어떠한 데이터를 서버로 보낼 
    //         start: 10,
    //         limit: 10
    //     },
    //     success: function(response){ // 응답을 받았을 때 들어갈 문법
    //         console.log("success", Ext.decode(response.responseText));
    //     },
    //     failure: function(response){ // 응답을 받지 못할 경우 들어갈 문법
    //         console.log("fail", response.status);
    //     }
    // });
    
    Ext.creatE("Ext.panel.Panel", {
        width: 500,
        hegith: 500,
        rednerTo: Ext.getBody(),
        listeners: 
        {
                boxready: function(obj){
                    Ext.Ajax.request({
                        url: 'https://localhost:8080/paging.jsp',
                        method: 'POST',
                        params: { // 어떠한 데이터를 서버로 보낼 
                            start: 10,
                            limit: 10
                        },
                        success: function(response){ // 응답을 받았을 때 들어갈 문법
                            var result = Ext.decode(response.responseText);
                            var store = obj.down("grid").getStore();
    
                            store.loadData(result.data);
                        },
                        failure: function(response){ // 응답을 받지 못할 경우 들어갈 문법
                            console.log("fail", response.status);
                        }
                    });
                }
        },
        items: [
            {
                xtype: 'panel',
                width: 500,
                height: 200,
                html: 'test',
            },
            {
                xtype: 'grid',
                // listeners:
                // {
                //     boxready: function(obj){
                //         Ext.Ajax.request({
                //             url: 'https://localhost:8080/paging.jsp',
                //             method: 'POST',
                //             params: { // 어떠한 데이터를 서버로 보낼 
                //                 start: 10,
                //                 limit: 10
                //             },
                //             success: function(response){ // 응답을 받았을 때 들어갈 문법
                //                 var result = Ext.decode(response.responseText);
                //                 var store = obj.getStore();

                //                 store.loadData(result.data);
                //             },
                //             failure: function(response){ // 응답을 받지 못할 경우 들어갈 문법
                //                 console.log("fail", response.status);
                //             }
                //         });
                //     }
                // },
                columns: [
                    {
                        text: '시',
                        dataIndex: 'si'
                    },
                    {
                        text: '군',
                        dataIndex: 'gungu'
                    },
                    {
                        text: '동',
                        dataIndex: 'dong'
                    }
                ],
                store:
                {
                    fields: ['si', 'gungu', 'dong'],
                    data: []
                } 
            }
        ]
    })
});