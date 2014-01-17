'use strict';
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.initConfig({
        // watch list
        watch: {
            js: {
                files: [
                    'Gruntfile.js',
                    'src/{,**/}*.js',
                    'tests/{,**/}*.js',
                    '!tests/libs/*.js'
                ],
                tasks: ['exec']
            }
        },

        // testing server
        connect: {
            testserver: {
                options: {
                    port: 1234,
                    base: '.'
                }
            }
        },

        // mocha command
        exec: {
            mocha: {
                command: 'mocha-phantomjs http://localhost:<%= connect.testserver.options.port %>/tests',
                stdout: true
            }
        }
    });

    // starts with live testing via testserver
    grunt.registerTask('default', function (target) {
        grunt.option('force', true);

        grunt.task.run([
            'connect:testserver',
            'exec',
            'watch'
        ]);
    });
};
