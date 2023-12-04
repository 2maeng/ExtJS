Ext.onReady(function(){
    Ext.create("Ext.panel.Panel", {
        width: 500,
        height: 500,    
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [
            {
                xtype: 'sampleGrid',
            }
        ]
    })
});