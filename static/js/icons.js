---
---
$(function() {
    var docs = {
    {% for doc in site.data.docsets %}
        '{{ doc.title }}': '{{ doc.icon }}'{% unless forloop.last %},{% endunless %}
    {% endfor %}
    };
    [].forEach.call(document.getElementsByClassName('docset'), function(el) {
        var title = el.querySelector('span').textContent;
        el.querySelector('img').setAttribute('src', 'data:;base64,' + docs[title]);
    });
})
