myApp.factory("contactService", function ContactService(){
    var data = 0;

    return {
        inc: function() {
            ++data;
        }
    };
});
