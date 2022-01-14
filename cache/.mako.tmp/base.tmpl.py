# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1642142014.4534647
_enable_loop = True
_template_filename = 'C:/Users/benja/AppData/Local/Programs/Python/Python310/lib/site-packages/nikola/data/themes/bootblog4/templates/base.tmpl'
_template_uri = 'base.tmpl'
_source_encoding = 'utf-8'
_exports = ['extra_head', 'belowtitle', 'sourcelink', 'before_content', 'extra_header', 'content', 'extra_footer', 'extra_js']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    ns = runtime.TemplateNamespace('base', context._clean_inheritance_tokens(), templateuri='base_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'base')] = ns

    ns = runtime.TemplateNamespace('notes', context._clean_inheritance_tokens(), templateuri='annotation_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'notes')] = ns

def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def belowtitle():
            return render_belowtitle(context._locals(__M_locals))
        navigation_links = _import_ns.get('navigation_links', context.get('navigation_links', UNDEFINED))
        set_locale = _import_ns.get('set_locale', context.get('set_locale', UNDEFINED))
        luxon_locales = _import_ns.get('luxon_locales', context.get('luxon_locales', UNDEFINED))
        date_fanciness = _import_ns.get('date_fanciness', context.get('date_fanciness', UNDEFINED))
        _link = _import_ns.get('_link', context.get('_link', UNDEFINED))
        content_footer = _import_ns.get('content_footer', context.get('content_footer', UNDEFINED))
        def sourcelink():
            return render_sourcelink(context._locals(__M_locals))
        translations = _import_ns.get('translations', context.get('translations', UNDEFINED))
        def extra_js():
            return render_extra_js(context._locals(__M_locals))
        template_hooks = _import_ns.get('template_hooks', context.get('template_hooks', UNDEFINED))
        blog_title = _import_ns.get('blog_title', context.get('blog_title', UNDEFINED))
        luxon_date_format = _import_ns.get('luxon_date_format', context.get('luxon_date_format', UNDEFINED))
        def extra_header():
            return render_extra_header(context._locals(__M_locals))
        def before_content():
            return render_before_content(context._locals(__M_locals))
        theme_config = _import_ns.get('theme_config', context.get('theme_config', UNDEFINED))
        def extra_footer():
            return render_extra_footer(context._locals(__M_locals))
        navigation_alt_links = _import_ns.get('navigation_alt_links', context.get('navigation_alt_links', UNDEFINED))
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        len = _import_ns.get('len', context.get('len', UNDEFINED))
        lang = _import_ns.get('lang', context.get('lang', UNDEFINED))
        base = _mako_get_namespace(context, 'base')
        def content():
            return render_content(context._locals(__M_locals))
        search_form = _import_ns.get('search_form', context.get('search_form', UNDEFINED))
        logo_url = _import_ns.get('logo_url', context.get('logo_url', UNDEFINED))
        show_blog_title = _import_ns.get('show_blog_title', context.get('show_blog_title', UNDEFINED))
        body_end = _import_ns.get('body_end', context.get('body_end', UNDEFINED))
        def extra_head():
            return render_extra_head(context._locals(__M_locals))
        __M_writer = context.writer()
        __M_writer('\r\n')
        __M_writer('\r\n')
        __M_writer(str(set_locale(lang)))
        __M_writer('\r\n')
        __M_writer(str(base.html_headstart()))
        __M_writer('\r\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_head'):
            context['self'].extra_head(**pageargs)
        

        __M_writer('\r\n')
        __M_writer(str(template_hooks['extra_head']()))
        __M_writer('\r\n</head>\r\n<body>\r\n<a href="#content" class="sr-only sr-only-focusable">')
        __M_writer(str(messages("Skip to main content")))
        __M_writer('</a>\r\n\r\n<!-- Header and menu bar -->\r\n<div class="container">\r\n      <header class="blog-header py-3">\r\n        <div class="row nbb-header align-items-center">\r\n          <div class="col-md-3 col-xs-2 col-sm-2" style="width: auto;">\r\n            <button class="navbar-toggler navbar-light bg-light nbb-navbar-toggler" type="button" data-toggle="collapse" data-target=".bs-nav-collapsible" aria-controls="bs-navbar" aria-expanded="false" aria-label="Toggle navigation">\r\n                <span class="navbar-toggler-icon"></span>\r\n            </button>\r\n            <div class="collapse bs-nav-collapsible bootblog4-search-form-holder">\r\n                ')
        __M_writer(str(search_form))
        __M_writer('\r\n            </div>\r\n        </div>\r\n          <div class="col-md-6 col-xs-10 col-sm-10 bootblog4-brand" style="width: auto;">\r\n            <a class="navbar-brand blog-header-logo text-dark" href="')
        __M_writer(str(_link("root", None, lang)))
        __M_writer('">\r\n')
        if logo_url:
            __M_writer('            <img src="')
            __M_writer(str(logo_url))
            __M_writer('" alt="')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('" id="logo" class="d-inline-block align-top">\r\n')
        __M_writer('\r\n')
        if show_blog_title:
            __M_writer('            <span id="blog-title">')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('</span>\r\n')
        __M_writer('        </a>\r\n          </div>\r\n            <div class="col-md-3 justify-content-end align-items-center bs-nav-collapsible collapse flex-collapse bootblog4-right-nav">\r\n            <nav class="navbar navbar-light bg-white">\r\n            <ul class="navbar-nav bootblog4-right-nav">\r\n                    ')
        __M_writer(str(base.html_navigation_links_entries(navigation_alt_links)))
        __M_writer('\r\n                    ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'belowtitle'):
            context['self'].belowtitle(**pageargs)
        

        __M_writer('\r\n                    ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'sourcelink'):
            context['self'].sourcelink(**pageargs)
        

        __M_writer('\r\n                    ')
        __M_writer(str(template_hooks['menu_alt']()))
        __M_writer('\r\n            </ul></nav>\r\n            </div>\r\n    </div>\r\n</header>\r\n\r\n<nav class="navbar navbar-expand-md navbar-light bg-white static-top">\r\n        <div class="collapse navbar-collapse bs-nav-collapsible" id="bs-navbar">\r\n            <ul class="navbar-nav nav-fill d-flex w-100">\r\n                ')
        __M_writer(str(base.html_navigation_links_entries(navigation_links)))
        __M_writer('\r\n                ')
        __M_writer(str(template_hooks['menu']()))
        __M_writer('\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n</nav>\r\n')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'before_content'):
            context['self'].before_content(**pageargs)
        

        __M_writer('\r\n</div>\r\n\r\n<div class="container" id="content" role="main">\r\n    <div class="body-content">\r\n')
        if theme_config.get('sidebar'):
            __M_writer('            <div class="row"><div class="col-md-8 blog-main">\r\n')
        __M_writer('        <!--Body content-->\r\n        ')
        __M_writer(str(template_hooks['page_header']()))
        __M_writer('\r\n        ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_header'):
            context['self'].extra_header(**pageargs)
        

        __M_writer('\r\n        ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'content'):
            context['self'].content(**pageargs)
        

        __M_writer('\r\n        <!--End of body content-->\r\n')
        if theme_config.get('sidebar'):
            __M_writer('        </div><aside class="col-md-4 blog-sidebar">')
            __M_writer(str(theme_config.get('sidebar')))
            __M_writer('</aside></div>\r\n')
        __M_writer('\r\n        <footer id="footer">\r\n            ')
        __M_writer(str(content_footer))
        __M_writer('\r\n            ')
        __M_writer(str(template_hooks['page_footer']()))
        __M_writer('\r\n            ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_footer'):
            context['self'].extra_footer(**pageargs)
        

        __M_writer('\r\n        </footer>\r\n    </div>\r\n</div>\r\n\r\n')
        __M_writer(str(base.late_load_js()))
        __M_writer('\r\n')
        if date_fanciness != 0:
            __M_writer('        <!-- fancy dates -->\r\n        <script>\r\n        luxon.Settings.defaultLocale = "')
            __M_writer(str(luxon_locales[lang]))
            __M_writer('";\r\n        fancydates(')
            __M_writer(str(date_fanciness))
            __M_writer(', ')
            __M_writer(str(luxon_date_format))
            __M_writer(');\r\n        </script>\r\n        <!-- end fancy dates -->\r\n')
        __M_writer('    ')
        if 'parent' not in context._data or not hasattr(context._data['parent'], 'extra_js'):
            context['self'].extra_js(**pageargs)
        

        __M_writer("\r\n    <script>\r\n    baguetteBox.run('div#content', {\r\n        ignoreClass: 'islink',\r\n        captions: function(element){var i=element.getElementsByTagName('img')[0];return i===undefined?'':i.alt;}});\r\n    </script>\r\n")
        __M_writer(str(body_end))
        __M_writer('\r\n')
        __M_writer(str(template_hooks['body_end']()))
        __M_writer('\r\n</body>\r\n</html>\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_head(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def extra_head():
            return render_extra_head(context)
        __M_writer = context.writer()
        __M_writer('\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_belowtitle(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        translations = _import_ns.get('translations', context.get('translations', UNDEFINED))
        def belowtitle():
            return render_belowtitle(context)
        base = _mako_get_namespace(context, 'base')
        len = _import_ns.get('len', context.get('len', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\r\n')
        if len(translations) > 1:
            __M_writer('                        ')
            __M_writer(str(base.html_translations()))
            __M_writer('\r\n')
        __M_writer('                    ')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_sourcelink(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def sourcelink():
            return render_sourcelink(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_before_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def before_content():
            return render_before_content(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_header(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def extra_header():
            return render_extra_header(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_content(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def content():
            return render_content(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_footer(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def extra_footer():
            return render_extra_footer(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_extra_js(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        _mako_get_namespace(context, 'notes')._populate(_import_ns, ['*'])
        def extra_js():
            return render_extra_js(context)
        __M_writer = context.writer()
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "C:/Users/benja/AppData/Local/Programs/Python/Python310/lib/site-packages/nikola/data/themes/bootblog4/templates/base.tmpl", "uri": "base.tmpl", "source_encoding": "utf-8", "line_map": {"23": 2, "26": 3, "29": 0, "73": 2, "74": 3, "75": 4, "76": 4, "77": 5, "78": 5, "83": 8, "84": 9, "85": 9, "86": 12, "87": 12, "88": 23, "89": 23, "90": 27, "91": 27, "92": 28, "93": 29, "94": 29, "95": 29, "96": 29, "97": 29, "98": 31, "99": 32, "100": 33, "101": 33, "102": 33, "103": 35, "104": 40, "105": 40, "110": 45, "115": 46, "116": 47, "117": 47, "118": 56, "119": 56, "120": 57, "121": 57, "126": 61, "127": 66, "128": 67, "129": 69, "130": 70, "131": 70, "136": 71, "141": 72, "142": 74, "143": 75, "144": 75, "145": 75, "146": 77, "147": 79, "148": 79, "149": 80, "150": 80, "155": 81, "156": 86, "157": 86, "158": 87, "159": 88, "160": 90, "161": 90, "162": 91, "163": 91, "164": 91, "165": 91, "166": 95, "171": 95, "172": 101, "173": 101, "174": 102, "175": 102, "181": 6, "190": 6, "196": 41, "208": 41, "209": 42, "210": 43, "211": 43, "212": 43, "213": 45, "219": 46, "233": 61, "247": 71, "261": 72, "275": 81, "289": 95, "303": 289}}
__M_END_METADATA
"""
