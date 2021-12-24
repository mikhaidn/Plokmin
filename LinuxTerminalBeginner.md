# A Beginner's Guide to The Terminal/Bash

## Concepts you MUST understand about the Unix Filesystem:
* Difference between a directory vs file in memory
* What are "read,write,execute" permissions (why will chmod u+x ___ will make any script executable ),
* How to navigate,copy,move yourself and a file/folder from the terminal.
* How to install packages: "apt-get install _" "pip install _" (python) etc
* How to set up personal settings/ terminal macros: ".bashrc"
* How to set up timed scripts: "cronjobs"
* How to make a script from the terminal ( vim/nano)
    * Recommend `vimtutor` on the terminal
    * The Shebang https://bash.cyberciti.biz/guide/Shebang

## Setting up and using Git on the terminal.
If you're the only one working on a repo the only things you need to worry about when getting started are:
* Add an ssh key to your github account: https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
* `Git clone ____ (url)` # to add a repo from GitHub to the terminal
* `git status` # see which files in a git repo have been changed since the last commit and push (red = uncommitted, green = committed, nothing means it's up to date with the last push)
* `Git add _ (files)` # stage files for a commit
* `Git commit -m "mandatory comment" `# Make a commit with all the staged files, add a comment describing the change
* `git push` # send all commits to github
* `git pull` # fetch all new changes from github


## High level checklist at different levels
### Beginner  
* Be comfortable moving around the terminal:
    * ls, cp, mv, sudo < any command>, vim, cat
* Basics of git provided above

### Intermediate
* "piping outputs of one command into another command"
    * cat <filename> | grep wow # search a file for any line containing "wow"
    * history | grep git # find all past usage of git (great for remembering a file that you changed, or finding a url for the git repo)
* scripting,
    * *.sh, shebang, basics of bash
    * cronjobs
    * file permissions
* Git branching

### Advanced
* Bash - if/ else/ case/ interactive scripts
* sed/awk/ regex/ data filters

## Quick Reference
   
`cp` - copy file/directory to another location
`ls` - list all files in directory
`cd` - "change directory" use for folder navigation, i.e. cd ~ go to "home directory"
`mv` - move file/directory from one place to another location (it's what you'd use for renaming a file too, can you think about why?)
`vim` - open the vim editor/ make a new file
`cat` - print out a file, line by line
`sudo <any other command>` - "super user do" think of it as the "Run as Administrator" option in Windows
