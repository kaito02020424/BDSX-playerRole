"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
const base_2 = require("../base");
command_2.command.register("addplayerrole", "add player's roles", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!base_2.roles.getValues().includes(param.role))
        return output.error("エラー:そのロールは存在しません。");
    const player = (0, base_1.getPlayerByNameTag)(param.player.getName());
    if (player == undefined) {
        database.willAddRolePlayers[param.player.getName()].push(param.role);
        (0, base_1.saveDatabase)();
        return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。");
    }
    database.playersData[player.getXuid()].push(param.role);
    (0, base_1.saveDatabase)();
    return output.success("対象にロールを付与しました。");
}, {
    player: command_1.PlayerCommandSelector,
    role: base_2.roles
});
