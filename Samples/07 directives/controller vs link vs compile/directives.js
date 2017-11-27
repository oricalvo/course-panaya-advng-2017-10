myApp.directive("dir1", function() {
    return {
        controller: function() {
            console.log("dir1.controller");
        },
        compile: function() {
            console.log("dir1.compile");

            return {
                pre: function() {
                    console.log("dir1.preLink");
                },
                post: function() {
                    console.log("dir1.postLink");
                },
            }
        }
    };
});

myApp.directive("dir2", function() {
    return {
        controller: function() {
            console.log("dir2.controller");
        },
        compile: function() {
            console.log("dir2.compile");

            return {
                pre: function () {
                    console.log("dir2.preLink");
                },
                post: function () {
                    console.log("dir2.postLink");
                },
            };
        }
    };
});
