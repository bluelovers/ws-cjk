"use strict";
/**
 * Created by user on 2020/2/22.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = __importDefault(require("./lib/list"));
function fixZhHarmony(text) {
    return list_1.default.reduce((text, [s, r]) => {
        return text.replace(s, r);
    }, text);
}
exports.fixZhHarmony = fixZhHarmony;
exports.default = fixZhHarmony;
//# sourceMappingURL=index.js.map