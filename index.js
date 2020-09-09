#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Text + chalk definitions
const data = {
    name: chalk.blue.bold("             Artyom Kouznetsov"),
    handle: chalk.blue("Arti"),
    work: chalk.white("Junior Web Developer in training @ BeCode Liège"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("putmytwitterhere"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~arti-art"),
    github: chalk.gray("https://github.com/") + chalk.green("Arti-Art"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("artyom-kouznetsov-12a82648"),
    web: chalk.cyan("PUT MY WEBPAGE"),
    npx: chalk.red("npx") + " " + chalk.white("@arti-art/npx-card"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green.bgBlack(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);