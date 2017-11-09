// myApp.service("contactService", function ContactService(){
//     console.log(this);
//
//     console.log(this instanceof ContactService);
// });

// myApp.factory("jQuery", function() {
//     return jQuery;
// });
//
// myApp.value("jQuery", jQuery);

myApp.factory("contactService", function ContactService(){
    var data;

    console.log(this);

    console.log(this instanceof ContactService);

    return {
        inc: function() {
            ++data;
        }
    };
});
