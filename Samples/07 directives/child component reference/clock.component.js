class ClockController {
    constructor($interval, $scope) {
        this.refresh();

        $interval(() => {
            this.refresh();

            this.onTick();
        }, 1000);
    }

    $onInit() {
    }

    refresh() {
        this.time = new Date();
    }
}

ClockController.$component = true;

myApp.component("clock", {
    controller: ClockController,
    templateUrl: "clock.component.html",
    bindings: {
        "onTick": "&",
    }
});
