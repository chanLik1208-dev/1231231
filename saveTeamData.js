const fs = require('fs');

function saveTeamData(teamData) {
    fs.writeFileSync('teamData.json', JSON.stringify(teamData));
}

// 示例团队数据
const teamData = {
    teamName: "Alpha",
    members: ["Player1", "Player2", "Player3"]
};

saveTeamData(teamData);
