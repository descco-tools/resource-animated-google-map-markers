module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    site: {
      files: [
        '<%= projectDev %>scss/{,*/, **/, **/**/*,**/*}*.{scss,sass}',
        '<%= projectDev %>js/{,*/,**/}*.js',
        '<%= projectDir %>css/{,*/, **/}*.css'
      ],
      tasks: ['site']
    }
  };
};
