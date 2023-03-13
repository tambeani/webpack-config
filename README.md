# webpack-config

Terminologies of webpack:

- Plugins
    * Used to change the behavior of build process (eg. uploading assets to Amazon S3)
    * They are classes that can hook into webpack's more low level APIs
- Loaders
    * Transformations applied to resource file to get an output file (convert SASS to CSS or ES6 to ES5 - you need a loader)
    * They can be async or sync
