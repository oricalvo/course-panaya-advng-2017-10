class ProfilerComponent {
    constructor(profilerService) {
        this.profilerService = profilerService;
    }

    get counters() {
        return this.profilerService.counters;
    }
}

myApp.component("appProfiler", {
    controller: ProfilerComponent,
    templateUrl: "profiler.component.html",
});
