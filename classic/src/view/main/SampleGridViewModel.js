Ext.define('StudyExtJS.view.main.SampleGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sampleGrid',
    data: {
        searchField: '검색값입니다.'
    },
    stores: {
        sampleStore: {
            fields: ['column1', 'column2', 'column3'],
            proxy: {
                type: 'ajax',
                url: '',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
    
});
