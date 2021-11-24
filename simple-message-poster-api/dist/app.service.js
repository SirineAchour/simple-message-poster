"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("./message.entity");
let AppService = class AppService {
    constructor(message_repository) {
        this.message_repository = message_repository;
    }
    async get_all() {
        return await this.message_repository.find();
    }
    async create_message(message) {
        return this.get_all().then(async (res) => {
            return await this.message_repository.save({
                message: message,
                timestamp: Date.now().toString(),
            }).then((r) => {
                let len = res.length;
                if (len > 10) {
                    this.delete_message(res[0]);
                }
                return r;
            });
        });
    }
    async delete_message(id) {
        return await this.message_repository.delete(id);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map