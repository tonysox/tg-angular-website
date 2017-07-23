namespace glc.ui {
    "use strict";

    let app = angular.module("glc");

    interface IPeople extends ng.IController {

    }

    class Controller implements IPeople {

        $router:any
        profiles: Array<data.ILawyerProfile> = [];

        static $inject = ["GlcService"];
        constructor(private glcService: data.IGlcService) {
        }

        $onInit = () => {
            this.glcService.queryProfiles().then((response) => {
                this.profiles = response.data;
            })
        }

        selected = (id: string): void => {
            this.$router.navigate(["SingleProfile", { id: id }]);
        }


    }

    class Component implements ng.IComponentOptions {

        bindings: { [binding: string]: string };

        constructor(
            public templateUrl = "app/workspace/profiles/profiles.html",
            public controllerAs = "vm",
            public controller = Controller) {
            this.bindings = {
                $router: "<"
            };

        }
    }

    app.component("glcProfiles", new Component());

}
