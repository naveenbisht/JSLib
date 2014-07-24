window.N = (function () {
    function Dome (els) {
        for(var i = 0; i < els.length; i++ ) {
            this[i] = els[i];
        }
        this.length = els.length;     
    }
     
    var N = {
        get: function (selector) {
            T.log(selector);
            var els;
            if (typeof selector === "string") {
                els = document.querySelectorAll(selector);
            } else if (selector.length) {
                els = selector;
            } else {
                els = [selector];
            }
            return new Dome(els);
        }
    };
     
    return N;
}());