"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    exceute({ name, educator, duration }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
