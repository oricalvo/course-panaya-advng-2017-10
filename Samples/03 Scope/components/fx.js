export function registerAllControllers(module, controllers) {
    for(const ctrl of controllers) {
        module.controller(ctrl.controllerName, ctrl);
    }
}
