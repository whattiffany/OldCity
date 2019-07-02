//使用CKEditor
CKEDITOR.replace('editorDemo');
function create() {
    //使用CKEditor提供的API來抓取
    console.log(CKEDITOR.instances.editorDemo.getData());
}


//透過CKEditor提供的API來主動將內容更新回去
CKEDITOR.instances.editorDemo.updateElement();
// 因為先把編輯器更新回textarea了，這裡就可以抓到目前最新的內容
console.log($('textarea[name=editorDemo]').val());