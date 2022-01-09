#!/usr/bin/env node
const gitRepo = require('download-git-repo')
const {join} = require('path')
const {existsSync} = require('fs')
const ora = require('ora')
const enterName = process.argv[2]
const name = enterName ? enterName : 'chrome-extensions'
const RepoDestination = join(process.cwd(), name)

if(existsSync(RepoDestination)) {
    console.log(`${RepoDestination} exists, please delete and rerun the command`)
} else {
    const spinner = ora('loading').start()
    gitRepo(
        'JianTin/chrome-extensions-template#master',
        RepoDestination,
        function(err){
            if(err){
                spinner.fail(`repo fail reason:${err}`)
            } else {
                spinner.succeed(`repo success`)
                console.log(`cd ${RepoDestination}`)
                console.log('npm install')
                console.log('npm run copy')
                console.log('npm run watch')
            }
        }
    )
}