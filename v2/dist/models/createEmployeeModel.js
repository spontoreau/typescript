"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeModel = void 0;
const schemaProperty_1 = require("../core/schema/schemaProperty");
exports.CreateEmployeeModel = (() => {
    let _instanceExtraInitializers = [];
    let _firstName_decorators;
    let _firstName_initializers = [];
    let _lastName_decorators;
    let _lastName_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _salary_decorators;
    let _salary_initializers = [];
    return class CreateEmployeeModel {
        static {
            _firstName_decorators = [(0, schemaProperty_1.SchemaProperty)({
                    description: `Employee's first name`,
                    type: 'string',
                    from: 'body'
                })];
            _lastName_decorators = [(0, schemaProperty_1.SchemaProperty)({
                    description: `Employee's last name`,
                    type: 'string',
                    from: 'body'
                })];
            _email_decorators = [(0, schemaProperty_1.SchemaProperty)({
                    description: `Employee's email`,
                    type: 'string',
                    from: 'body',
                    pattern: '^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$'
                })];
            _salary_decorators = [(0, schemaProperty_1.SchemaProperty)({
                    description: `Employee's salary`,
                    type: 'integer',
                    from: 'body',
                    minimum: 0
                })];
            __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: obj => "firstName" in obj, get: obj => obj.firstName, set: (obj, value) => { obj.firstName = value; } } }, _firstName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: obj => "lastName" in obj, get: obj => obj.lastName, set: (obj, value) => { obj.lastName = value; } } }, _lastName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _salary_decorators, { kind: "field", name: "salary", static: false, private: false, access: { has: obj => "salary" in obj, get: obj => obj.salary, set: (obj, value) => { obj.salary = value; } } }, _salary_initializers, _instanceExtraInitializers);
        }
        firstName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _firstName_initializers, void 0));
        lastName = __runInitializers(this, _lastName_initializers, void 0);
        email = __runInitializers(this, _email_initializers, void 0);
        salary = __runInitializers(this, _salary_initializers, void 0);
    };
})();
//# sourceMappingURL=createEmployeeModel.js.map