window.T = (function () {
    
    var test = {
        
        /*
         * This is for my log information
         * which is used in my developer tool to see
         */
        log: function(msg) {
         
            console.log(msg)
        },
        
        info: function(msg) {
         
            console.info(msg);
        },
        
        dir: function(msg) {
            
            console.dir(msg);
        }
    }
    
    return test;
}());