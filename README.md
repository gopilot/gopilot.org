# Your [DocPad](http://docpad.org) Project

## First-time set up
In addition to the remote for this branch, make sure you run 
```
git remote add live https://github.com/gopilot/gopilot.github.io.git
```
to create the remote for deploying

## Deploying and pushing
To push your changes, always make sure to use 
```
git push origin master
```
If you want to deploy to the GitHub pages site, use
```
docpad deploy-ghpages --env static
```
(Also make sure you've run ```npm install``` to get the docpad GitHub Pages plugin)

## License
Copyright &copy; 2013+ All rights reserved.

