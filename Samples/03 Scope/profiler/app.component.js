class AppComponent {
    constructor($interval) {
        this.counter = 0;
        this.intervalId = null;
        this.$interval = $interval;
    }
    inc() {
        ++this.counter;
    }

    dec() {
        --this.counter;
    }

    startTimer() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = this.$interval(()=> {
            this.inc();
        }, 1000);
    }

    stopTimer() {
        if(!this.intervalId) {
            return;
        }

        this.$interval.cancel(this.intervalId);
        this.intervalId = null;
    }
}

myApp.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
