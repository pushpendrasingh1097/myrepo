$(document).ready(function() {
    var editor;

    var users = [
        { id: 1, name: "Tarani" },
        { id: 2, name: "Kapil" },
        { id: 3, name: "Pushpendra" },
        { id: 4, name: "Vikas" }
    ];

    loadEditor('editor1', true);

    var select = $('#username')[0];
    $.each(users, function(i, user) {
        var option = new Option(user.name, user.id);
        select.options[i] = option;
    });
    $('#username').change(onUserChanged);
    setTimeout(function() {
        $('#username').trigger("change", 1);
    }, 500)

    function onUserChanged(event) {
        var target = event.currentTarget;
        var id = $(target).val();
        selectUser(id);
        editor.focus();
    }

    function selectUser(id) {
        var i;
        for (i = 0; i < users.length; ++i) {
            if (users[i].id == id) {
                break;
            }
        }
        var user = users[i];
        if (user && editor) {
            var lite = editor.plugins.lite;
            lite && lite.findPlugin(editor).setUserInfo(user);
        }
    }


    function loadEditor(id, focus) {
        editor = CKEDITOR.replace(id, {
            height: "450",
            removeButtons: 'Source'
        });

        function onConfigLoaded(e) {
            var conf = e.editor.config;
            var lt = conf.lite = conf.lite || {};
            if (location.href.indexOf("debug") > 0) {
                lt.includeType = "debug";
            }
        }

        editor.on('configLoaded', onConfigLoaded);
    }

    CKEDITOR.on('instanceReady', function (ev) {

        // Create a new command with the desired exec function
        var overridecmd = new CKEDITOR.command(editor, {
            exec: function(editor){
                // Replace this with your desired save button code
                // alert(editor.document.getBody().getHtml());
                alert("you requested to save the document.");
            }
        });

        // Replace the old save's exec function with the new one
        ev.editor.commands.save.exec = overridecmd.exec;
    });
});
