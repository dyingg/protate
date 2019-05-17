"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProxyRot {
    constructor(proxies) {
        this.proxies = [];
        this.temp = proxies;
        this.temp.forEach(element => {
            var c = element.split(":");
            var final = "http://";
            final += c[2] + ":" + c[3] + "@" + c[0] + ":" + c[1];
            this.proxies.push(final);
        });
        console.log("[ROTATOR] - Read and formatted proxies. [" + proxies.length + "]");
        this.total = proxies.length;
        this.counter = 0;
    }
    next() {
        var self = this;
        if (this.counter == this.total)
            this.counter = 0;
        return self.proxies[self.counter++];
    }
}
exports.default = ProxyRot;
