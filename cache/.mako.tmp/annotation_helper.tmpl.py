# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1642142014.5274704
_enable_loop = True
_template_filename = 'C:/Users/benja/AppData/Local/Programs/Python/Python310/lib/site-packages/nikola/data/themes/base/templates/annotation_helper.tmpl'
_template_uri = 'annotation_helper.tmpl'
_source_encoding = 'utf-8'
_exports = ['css', 'code']


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


def render_css(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        __M_writer('\r\n    <link rel="stylesheet" href="http://assets.annotateit.org/annotator/v1.2.5/annotator.min.css">\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_code(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        __M_writer('\r\n    <script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>\r\n    <script src="http://assets.annotateit.org/annotator/v1.2.7/annotator-full.js"></script>\r\n    <script>\r\n    jQuery(function ($) {\r\n        $(\'body\').annotator().annotator(\'setupPlugins\', {}, {\r\n            // Disable filter bar\r\n            Filter: false\r\n        });\r\n    });\r\n    </script>\r\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"filename": "C:/Users/benja/AppData/Local/Programs/Python/Python310/lib/site-packages/nikola/data/themes/base/templates/annotation_helper.tmpl", "uri": "annotation_helper.tmpl", "source_encoding": "utf-8", "line_map": {"16": 0, "21": 3, "22": 16, "28": 1, "32": 1, "38": 5, "42": 5, "48": 42}}
__M_END_METADATA
"""
