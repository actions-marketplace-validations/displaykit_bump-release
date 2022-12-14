const { execSync } = require("child_process");

async function pushToGitHub({ branch, cwd }) {
    const output = execSync(`git push -u origin HEAD --follow-tags`, { encoding: "utf-8", cwd });
    console.log(output);
    return true;
}

module.exports = {
    pushToGitHub,
}