var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_control_1 = require('../abstract-control');
var IntegerDirective = (function () {
    function IntegerDirective() {
        this.template = "\n    <jsonforms-control>\n      <input type=\"number\" \n             step=\"1\" \n             id=\"{{vm.id}}\" \n             class=\"form-control jsf-control-integer\" \n             ng-model=\"vm.modelValue[vm.fragment]\" \n             ng-change='vm.modelChanged()' \n             ng-readonly=\"vm.uiSchema.readOnly\"/>\n    </jsonforms-control>";
        this.controller = IntegerController;
        this.controllerAs = 'vm';
    }
    return IntegerDirective;
})();
var IntegerController = (function (_super) {
    __extends(IntegerController, _super);
    function IntegerController(scope, pathResolver) {
        _super.call(this, scope, pathResolver);
    }
    IntegerController.$inject = ['$scope', 'PathResolver'];
    return IntegerController;
})(abstract_control_1.AbstractControl);
var IntegerControlRendererTester = abstract_control_1.ControlRendererTester('integer', 1);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular
    .module('jsonforms.renderers.controls.integer', ['jsonforms.renderers.controls'])
    .directive('integerControl', function () { return new IntegerDirective(); })
    .run(['RendererService', function (RendererService) {
        return RendererService.register('integer-control', IntegerControlRendererTester);
    }
])
    .name;
//# sourceMappingURL=integer-directive.js.map