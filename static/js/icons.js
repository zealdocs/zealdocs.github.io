---
---
$(function() {
    var docs = {
    {% for doc in site.data.docsets %}
        '{{ doc.title }}': '{{ doc.icon }}'{% if forloop.last %}{% else %},{% endif %}
    {% endfor %}
    };
    $('.docset').each(function() {
        var title = $(this).find('span').text();
        $(this).find('img').attr(
            'src', 'data:;base64,' + docs[title]
        );
    });
})
