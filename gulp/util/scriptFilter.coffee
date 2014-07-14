path = require 'path'

###
Filters out non .coffee and .js files.
Prevents accidental inclusion of hidden files.

@param name {string} of file to test.
@return {boolean}
###
module.exports = (name) ->
  /(\.(js|coffee)$)/i.test path.extname name
