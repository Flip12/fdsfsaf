"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Eris = require('eris');
var fetch_ = require("node-fetch");
var config = require('../config.json');
var cooldowns = new Map();
var ms = function (ms) {
    var seconds = (ms / 1000).toFixed(1);
    var minutes = (ms / (1000 * 60)).toFixed(1);
    var hours = (ms / (1000 * 60 * 60)).toFixed(1);
    var days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60)
        return seconds + " ثواني";
    else if (minutes < 60)
        return minutes + " دقائق";
    else if (hours < 24)
        return hours + " ساعات";
    else
        return days + " ايام";
};
var bot = new Eris(config.token, {
    intents: 32767,
    restMode: true
});
bot.on("ready", function () {
    console.log("Bot is ready!");
});
bot.on("messageCreate", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        
        if (msg.author.bot)
            return [2 /*return*/];
        bot.getRESTChannel(msg.channel.id).then(function (msg_channel) { return __awaiter(void 0, void 0, void 0, function () {
            var userId, channel_1, channel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(msg.content.startsWith("زاجل") && msg_channel.type == 1)) return [3 /*break*/, 2];
                        userId = msg.content.trim().split(" ").slice(1)[0];
                        return [4 /*yield*/, msg.author.getDMChannel()];
                    case 1:
                        channel_1 = _a.sent();
                        if (cooldowns.has(msg.author.id) && (cooldowns.get(msg.author.id) + (60000 * config.cooldown_time)) > Date.now())
                            return [2 /*return*/, channel_1.createMessage({ embeds: [{ description: "**\u0644\u0642\u062F \u0642\u0645\u062A \u0628\u0623\u0631\u0633\u0627\u0644 \u0632\u0627\u062C\u0644 \u0645\u0646 \u0641\u062A\u0631\u0629 \u064A\u062C\u0628 \u0639\u0644\u064A\u0643 \u0627\u0646\u062A\u0638\u0627\u0631 ".concat(ms((cooldowns.get(msg.author.id) + (60000 * config.cooldown_time)) - Date.now()), " **"), color: 0xFF0000 }] })];
                        if (!userId)
                            return [2 /*return*/, channel_1.createMessage({ content: ":x: \u064A\u062C\u0628 \u0627\u0646 \u062A\u0642\u0648\u0645 \u0628\u0648\u0636\u0639 \u0627\u064A\u062F\u064A \u0627\u0644\u0634\u062E\u0635 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0639\u0645\u0644 \u0644\u0647 \u0632\u0627\u062C\u0644" })];
                        if (!msg.content.trim().split(" ").slice(1)[1])
                            return [2 /*return*/, channel_1.createMessage({ content: ":x: \u064A\u062C\u0628 \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0627\u0631\u0633\u0627\u0644\u0647 \u0641\u064A \u0632\u0627\u062C\u0644 \u0644\u0647" })];
                        bot.getRESTGuildMember(config.server_id, userId).then(function (user) { return __awaiter(void 0, void 0, void 0, function () {
                            var res_fetch, image_buffer, _a, _b, ctx, log, res_fetch_1;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        channel_1.createMessage({ content: "\u2705 \u062A\u0645 \u0623\u0631\u0633\u0627\u0644 \u0628\u0646\u062C\u0627\u062D ,<@!".concat(msg.author.id, ">") });
                                        if (!cooldowns.has(msg.author.id))
                                            cooldowns.set(msg.author.id, Date.now());
                                        return [4 /*yield*/, fetch_(config.zajil_line_image_url)];
                                    case 1:
                                        res_fetch = _c.sent();
                                        _b = (_a = Buffer).from;
                                        return [4 /*yield*/, res_fetch.arrayBuffer()];
                                    case 2:
                                        image_buffer = _b.apply(_a, [_c.sent()]);
                                        ctx = {
                                            embeds: [{
                                                    author: { name: "".concat(user.username, "#").concat(user.discriminator), icon_url: user.avatarURL },
                                                    description: "".concat(msg.content.trim().split(" ").slice(2).join(" ")),
                                                    image: {
                                                        url: msg.attachments.length > 0 && msg.attachments[0].content_type.startsWith("image") ? msg.attachments[0].proxy_url : null
                                                    },
                                                    color: 0x005555,
                                                    thumbnail: { url: user.avatarURL },
                                                    timestamp: new Date()
                                                }]
                                        };
                                        log = function (mm) {
                                            return {
                                                embeds: [{
                                                        title: "زاجل جديد",
                                                        color: 0x005555,
                                                        thumbnail: { url: user.avatarURL },
                                                        timestamp: new Date(),
                                                        fields: [{
                                                                name: "الرسالة",
                                                                value: "".concat(msg.content.trim().split(" ").slice(2).join(" "))
                                                            }, {
                                                                name: "الرابط",
                                                                value: "[\u0627\u0636\u063A\u0637 \u0644\u0644\u0630\u0647\u0627\u0628 \u0627\u0644\u064A \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0641\u064A \u0631\u0648\u0645 \u0632\u0627\u062C\u0644](".concat(mm.jumpLink, ")")
                                                            }, {
                                                                name: "من",
                                                                value: "<@!".concat(msg.author.id, ">")
                                                            }, {
                                                                name: "زاجل الي",
                                                                value: "<@!".concat(user.id, ">")
                                                            }]
                                                    }]
                                            };
                                        };
                                        if (!(msg.attachments.length > 0 && msg.attachments[0].content_type.startsWith("video"))) return [3 /*break*/, 4];
                                        return [4 /*yield*/, fetch_(msg.attachments[0].url)];
                                    case 3:
                                        res_fetch_1 = _c.sent();
                                        res_fetch_1.arrayBuffer().then(function (video_buffer) { return __awaiter(void 0, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                bot.createMessage(config.zajil_channel_id, { content: "<@!".concat(user.id, ">\n\n\n.") }, { name: "".concat(config.zajil_line_image_url.split("/")[6]), file: image_buffer }).then(function () { return bot.createMessage(config.zajil_channel_id, ctx, { name: msg.attachments[0].filename, file: Buffer.from(video_buffer) }); }).then(function (mm) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                                    return [2 /*return*/, bot.createMessage(config.zajil_channel_log_id, log(mm))];
                                                }); }); });
                                                return [2 /*return*/];
                                            });
                                        }); });
                                        return [3 /*break*/, 5];
                                    case 4:
                                        bot.createMessage(config.zajil_channel_id, { content: "<@!".concat(user.id, ">\n\n\n.") }, { name: "".concat(config.zajil_line_image_url.split("/")[6]), file: image_buffer }).then(function () { return bot.createMessage(config.zajil_channel_id, ctx); }).then(function (mm) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2 /*return*/, bot.createMessage(config.zajil_channel_log_id, log(mm))];
                                        }); }); });
                                        _c.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (e) {
                            console.error(e);
                            channel_1.createMessage({ content: ":x: \u064A\u062C\u0628 \u0627\u0646 \u062A\u0642\u0648\u0645 \u0628\u0648\u0636\u0639 \u0627\u064A\u062F\u064A \u0634\u062E\u0635 \u0635\u062D\u064A\u062D \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0639\u0645\u0644 \u0644\u0647 \u0632\u0627\u062C\u0644" });
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(msg_channel.type == 1 && !msg.guildID && msg.guildID != config.server_id)) return [3 /*break*/, 4];
                        return [4 /*yield*/, msg.author.getDMChannel()["catch"](console.error)];
                    case 3:
                        channel = _a.sent();
                        channel.createMessage({
                            embeds: [{
                                    title: "زاجل يمكننك أرسال رسالة للشخص الذي تريد دون البوح بأسمك",
                                    fields: [{ name: "طريقة الأستخدام:", value: "`زاجل` `ايدي الشخص` `الرسالة`" }, { name: "مثال:", value: "".concat(config.example) }],
                                    color: 0x005555,
                                    timestamp: new Date()
                                }]
                        })["catch"](console.error);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });

bot.connect();