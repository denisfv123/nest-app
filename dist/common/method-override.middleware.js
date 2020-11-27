"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MethodOverrideMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodOverrideMiddleware = void 0;
const common_1 = require("@nestjs/common");
const methodOverride = require("method-override");
let MethodOverrideMiddleware = MethodOverrideMiddleware_1 = class MethodOverrideMiddleware {
    static configure(getter, opts) {
        this.getter = getter;
        this.options = opts;
    }
    use(req, res, next) {
        if (MethodOverrideMiddleware_1.options) {
            methodOverride(MethodOverrideMiddleware_1.getter, MethodOverrideMiddleware_1.options)(req, res, next);
        }
        else {
            methodOverride()(req, res, next);
        }
    }
};
MethodOverrideMiddleware = MethodOverrideMiddleware_1 = __decorate([
    common_1.Injectable()
], MethodOverrideMiddleware);
exports.MethodOverrideMiddleware = MethodOverrideMiddleware;
//# sourceMappingURL=method-override.middleware.js.map