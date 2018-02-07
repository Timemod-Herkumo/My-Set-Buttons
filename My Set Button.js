
            return new west.gui.Button(caption, callback);
        };
    };
    mySetButton.Updater = function () {
        $.getScript(mySetButton.updateUrl, function () {
            if (aggiornaScript.mySetButton != mySetButton.version) {
                var updateMessage = new west.gui.Dialog(MPlang.update + ': ' + MPlang.name, '<span>' +
                    MPlang.updateAvailable + '<br><br><b>v' +
                    aggiornaScript.mySetButton + ':</b><br>' +
                    aggiornaScript.mySetButtonNew + '</span>', west.gui.Dialog.SYS_WARNING).addButton(MPlang.update, function () {
                    updateMessage.hide();
                    location.href = mySetButton.website + '/code.user.js';
                }).addButton('cancel').show();
            }
        });
    };
    $(document).ready(function () {
        try {
            mySetButton.gui.init();
            mySetButton.init();
            setTimeout(mySetButton.Updater, 5000);
        } catch (e) {
            console.log(e.stack);
        }
    });
});
