(function() {
    var menu = document.querySelector('#menu');
    menu.addEventListener('click', function(e) {
        var target = e.target;
        var tagName = target.tagName.toLowerCase();
        var parent = null;
        if (tagName !== 'h2' && tagName !== 'img') {
            return;
        }
        if (tagName === 'h2') {
            parent = target.parentElement;
        }
        if (tagName === 'img') {
            parent = target.parentElement.parentElement;
        }
        var className = parent.className;
        if (className.indexOf('active') > -1) {
            parent.setAttribute('class', className.replace('active', ''));
        } else {
            parent.setAttribute('class', className + ' active');
        }

    })
})();