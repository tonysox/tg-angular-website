namespace mrs.ui {
    "use strict";

    let app = angular.module("lglc");

    interface IHome extends ng.IController {

    }

    class Controller implements IHome {

        
    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/home.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {

            };

        }
    }

    app.component("lglcHome", new Component());

}