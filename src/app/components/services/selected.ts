namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface ILinks extends ng.IController {

    }

    class Controller implements ILinks {
        service: string;
        areaOfPractice: data.IService;
        services: Array<data.IService> = [];
        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }

        $onChanges = (onChangesObj: ng.IOnChangesObject) => {
            if (this.service)
                this.glcService.queryServices().then((response) => {
                    this.services = response.data;
                    this.services.forEach((service) => {
                        if (this.service == service.id) {
                            this.areaOfPractice = service;
                        }
                    })
                })
        }

    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/components/services/selected.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                service: "<"
            };

        }
    }

    app.component("glcServiceSelected", new Component());

}
