# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    collections:
        events: ->
            @getCollection("html").findAll({relativeOutDirPath: 'events'}, [order:1])
        team: (rname) ->
            @getCollection("documents").findAll({relativeOutDirPath: 'team', region: 'DC'}, [{where:1},{title:1},{name:1}])
    plugins:
	ghpages:
	    deployRemote: 'live'
	    deployBranch: 'master'
}

# Export the DocPad Configuration
module.exports = docpadConfig
