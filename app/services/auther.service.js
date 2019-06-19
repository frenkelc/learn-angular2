System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AutherService;
    return {
        setters:[],
        execute: function() {
            AutherService = (function () {
                function AutherService() {
                }
                AutherService.prototype.getAuthers = function () {
                    return ["Auther1", "Auther2", "Auther3"];
                };
                return AutherService;
            }());
            exports_1("AutherService", AutherService);
        }
    }
});
//# sourceMappingURL=auther.service.js.map