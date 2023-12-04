Ext.define('StudyExtJS.view.main.SampleGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sampleGrid',
    dataLoad: function(btn){
        console.log("버튼 클릭 이벤트 발생!")

        // var grid = btn.up("grid");
        // var store = grid.getStore();

        // store.load();

        var gird = btn.up("grid");
        var viewModel = grid.getViewModel();
        var store = viewModel.getStore("sampleStore");

        console.log("Store", store);

        store.load();
    }
});
