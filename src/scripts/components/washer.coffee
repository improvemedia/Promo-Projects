$layout = $('.p-layout')

Component.define 'washer',
  events:
    'click on %openPanel':  'onOpenPanel'
    'mouseleave on %panel': 'onClosePanel'

  onOpenPanel: ->
    @$('%panel').addClass('is-opened')

  onClosePanel: (e, $el) ->
    console.log 1234
    @$('%panel').removeClass('is-opened')