"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
const base_2 = require("../base");
command_2.command.register("removeplayerrole", "remove player's roles", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!base_2.roles.getValues().includes(param.role))
        return output.error("エラー:そのロールは存在しません。");
    const player = (0, base_1.getPlayerByNameTag)(param.player.getName());
    if (player == undefined) {
        return output.error("エラー:プレイヤーのログイン中にのみロール削除が可能です。");
    }
    const playerRoles = database.playersData[player.getXuid()];
    if (playerRoles.includes(param.role)) {
        database.playersData[player.getXuid()] = (0, base_1.removeElement)(playerRoles, param.role);
        (0, base_1.saveDatabase)();
        return output.success("指定のプレイヤーからロールを剥奪しました。");
    }
    else {
        return output.error("エラー:そのプレイヤーはそのロールを保持していません。");
    }
}, {
    player: command_1.PlayerCommandSelector,
    role: base_2.roles
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlUGxheWVyUm9sZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW1vdmVQbGF5ZXJSb2xlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFpRjtBQUNqRiwwQ0FBdUM7QUFDdkMsMkRBQTBEO0FBQzFELGtDQUF5RTtBQUN6RSxNQUFNLFFBQVEsR0FBbUgsVUFBVSxDQUFBO0FBQzNJLGtDQUE2QjtBQUM3QixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxnQ0FBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlILElBQUksQ0FBQyxZQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNyRixNQUFNLE1BQU0sR0FBRyxJQUFBLHlCQUFrQixFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUN6RCxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7UUFDckIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7S0FDdkQ7SUFDRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzFELElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFBLG9CQUFhLEVBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvRSxJQUFBLG1CQUFZLEdBQUUsQ0FBQTtRQUNkLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0tBQ2pEO1NBQU07UUFDSCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtLQUNyRDtBQUNMLENBQUMsRUFBRTtJQUNDLE1BQU0sRUFBRSwrQkFBcUI7SUFDN0IsSUFBSSxFQUFFLFlBQUs7Q0FDZCxDQUFDLENBQUEifQ==