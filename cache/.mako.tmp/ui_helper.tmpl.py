# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1642142014.4684634
_enable_loop = True
_template_filename = 'C:/Users/benja/AppData/Local/Programs/Python/Python310/lib/site-packages/nikola/data/themes/bootstrap4/templates/ui_helper.tmpl'
_template_uri = 'ui_helper.tmpl'
_source_encoding = 'utf-8'
_exports = ['breadcrumbs', 'show_sourcelink']


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        __M_writer('\r\n\r\n')
        __M_writer('\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_breadcrumbs(context,crumbs):
    __M_caller = context.caller_stack._push_frame()
    try:
        index_file = context.get('index_file', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\r\n')
        if crumbs:
            __M_writer('<nav class="breadcrumbs">\r\n<ul class="breadcrumb">\r\n')
            for link, text in crumbs:
                if text != index_file:
                    if link == '#':
                        __M_writer('                <li class="breadcrumb-item active">')
                        __M_writer(str(text.rsplit('.html', 1)[0]))
                        __M_writer('</li>\r\n')
                    else:
                        __M_writer('                <li class="breadcrumb-item"><a href="')
                        __M_writer(str(link))
                        __M_writer('">')
                        __M_writer(str(text))
                        __M_writer('</a></li>\r\n')
            __M_writer('</ul>\r\n</nav>\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_show_sourcelink(context,sourcelink_href):
    __M_caller = context.caller_stack._push_frame()
    try:
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\r\n    <li class="nav-item">\r\n    <a href="')
        __M_writer(str(sourcelink_href))
        __M_writer('" id="sourcelink" class="nav-link">')
        __M_writer(str(messages("Source")))
        __M_writer('</a>\r\n    </li>\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "C:/Users/benja/AppData/Local/Programs/Python/Python310/lib/site-packages/nikola/data/themes/bootstrap4/templates/ui_helper.tmpl", "uri": "ui_helper.tmpl", "source_encoding": "utf-8", "line_map": {"16": 0, "21": 18, "22": 24, "28": 2, "33": 2, "34": 3, "35": 4, "36": 6, "37": 7, "38": 8, "39": 9, "40": 9, "41": 9, "42": 10, "43": 11, "44": 11, "45": 11, "46": 11, "47": 11, "48": 15, "54": 20, "59": 20, "60": 22, "61": 22, "62": 22, "63": 22, "69": 63}}
__M_END_METADATA
"""
