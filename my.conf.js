module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [

       {pattern: 'public/scripts/lib/jquery.js', watched: false, served: true, included: true},
       {pattern: 'public/scripts/lib/knockout.js', watched: false, served: true, included: true},
        'public/scripts/main.js',
        'sqrt.js',
        'test/spec/*.js'
    ],
    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],
    preprocessors: { 'sqrt.js': ['coverage'],
                    'public/scripts/*.js': ['coverage']},

    singleRun: true
  });
};
