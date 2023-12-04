Ext.define('StudyExtJS.view.main.SampleGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'sampleGrid',
    controller: 'sampleGrid',
    viewModel: 'sampleGrid',
    tbar: [
        {
            xtype: 'textfield',
            bind: {
                value: '{searchField}'
            }
        },
        {
            xtype: 'button',
            text: '데이터 로드',
            handler: 'dataLoad'
        }
    ],
    columns: [
        {
            text: '컬럼1',
            flex: 1,
            dataIndex: 'column1'
        },
        {
            text: '컬럼2',
            flex: 1,
            dataIndex: 'column2'
        },
        {
            text: '컬럼3',
            flex: 1,
            dataIndex: 'column3'
        }
    ],
    bind: {
        store: '{sampleStore}'
    }
});
