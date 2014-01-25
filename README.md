# gopilot.org

## First-time set up
In addition to the remote for this branch, make sure you run 
```
git remote add live https://github.com/gopilot/gopilot.github.io.git
```
to create the remote for deploying.

## Deploying
Simply push your changes to this repo, which will be used for development. 
If you want to deploy to the GitHub pages site, use
```
docpad deploy-ghpages --env static
```
which will deploy the site to the live [gopilot.github.io](https://github.com/gopilot/gopilot.github.io.git) repo.

(Before you deploy make sure you've run ```npm install``` to get the [docpad GitHub Pages](https://github.com/docpad/docpad-plugin-ghpages) plugin)

## License
Copyright &copy; Pilot, 2013-2014 All rights reserved.

