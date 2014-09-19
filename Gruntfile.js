module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-ngmin');

  grunt.initConfig({
    shell: {
      options : {
        stdout: true
      },
      npm_install: {
        command: 'npm install'
      }
      // fuzemap_api_tests: {
      //   command: 'CLAY_CONFIG=./config/test.yaml python -m test.test_fuzemap_api'
      // },
      // audio_api_tests: {
      //   command: 'CLAY_CONFIG=./config/test.yaml python -m test.test_fuze_audio_api'
      // },
      // video_api_tests: {
      //   command: 'CLAY_CONFIG=./config/test.yaml python -m test.test_fuze_video_api'
      // }
    },

    // connect: {
    //   options: {
    //     base: 'app/'
    //   },
    //   webserver: {
    //     options: {
    //       port: 8888,
    //       keepalive: true
    //     }
    //   },
    //   devserver: {
    //     options: {
    //       port: 8888
    //     }
    //   },
    //   testserver: {
    //     options: {
    //       port: 9999
    //     }
    //   },
    //   coverage: {
    //     options: {}
    //   }
    // },

    // open: {
    //   devserver: {
    //     path: 'http://localhost:8888'
    //   },
    //   coverage: {}
    // },

    // karma: {
    //   unit: {
    //     configFile: './karma.conf.js',
    //     autoWatch: false,
    //     singleRun: true
    //   },
    //   e2e: {
    //     configFile: './karma.conf.js',
    //     autoWatch: false,
    //     singleRun: true
    //   }
    // }

    ngmin: {
      app: {
        src: ['public/SlipStream/*.js'],
        dest: 'public/SlipStream/js/slipstream.js'
      },
      controllers: {
        src: ['public/SlipStream/controllers/*.js'],
        dest: 'public/SlipStream/js/controllers.js'
      },
      directives: {
        src: ['public/SlipStream/directives/*.js'],
        dest: 'public/SlipStream/js/directives.js'
      },
      services: {
        src: ['public/SlipStream/services/*.js'],
        dest: 'public/SlipStream/js/services.js'
      },
      configs: {
        src: ['public/SlipStream/configs/*.js'],
        dest: 'public/SlipStream/js/configs.js'
      }
    },

    watch: {
      assets: {
        files: ['public/SlipStream/*.js', 'public/SlipStream/controllers/*.js', 'public/SlipStream/directives/*.js', 'public/SlipStream/services/*.js', 'public/SlipStream/configs/*.js'],
        tasks: ['ngmin']
      }
    }

    // watch: {
    //   assets: {
    //     files: ['app/styles/**/*.css','app/scripts/**/*.js'],
    //     tasks: ['concat']
    //   }
    // },

    // concat: {
    //   styles: {
    //     dest: './app/assets/app.css',
    //     src: [
    //       'app/styles/reset.css',
    //       'bower_components/components-font-awesome/css/font-awesome.css',
    //       'bower_components/bootstrap.css/css/bootstrap.css',
    //       'app/styles/app.css'
    //     ]
    //   },
    //   scripts: {
    //     options: {
    //       separator: ';'
    //     },
    //     dest: './app/assets/app.js',
    //     src: [
    //       'bower_components/angular/angular.js',
    //       'bower_components/angular-route/angular-route.js',
    //       'bower_components/angularjs-scope.safeapply/src/Scope.SafeApply.js',
    //       'app/scripts/lib/router.js',
    //       'app/scripts/config/config.js',
    //       'app/scripts/services/**/*.js',
    //       'app/scripts/directives/**/*.js',
    //       'app/scripts/controllers/**/*.js',
    //       'app/scripts/filters/**/*.js',
    //       'app/scripts/config/routes.js',
    //       'app/scripts/app.js',
    //     ]
    //   }
    // }
  });

  grunt.registerTask('test', ['shell:fuzemap_api_tests', 'shell:audio_api_tests', 'shell:video_api_tests', 'karma:e2e']);
  // grunt.registerTask('test:unit', ['karma:unit']);
  // grunt.registerTask('test:midway', ['connect:testserver','karma:midway']);
  // grunt.registerTask('test:e2e', ['connect:testserver', 'karma:e2e']);

  //installation-related
  // grunt.registerTask('install', ['shell:npm_install']);

  //defaults
  // grunt.registerTask('default', ['dev']);

  //development
  // grunt.registerTask('dev', ['install', 'concat', 'connect:devserver', 'open:devserver', 'watch:assets']);

  //server daemon
  // grunt.registerTask('serve', ['connect:webserver']);
};
