"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    runtime: 'edge'
};
function handler(req) {
    return new Response("Hello World");
}
exports.default = handler;
