$layout = $('.p-layout')

Component.define 'stickyWasher',
  events:
    'scroll on window': 'onScroll'
    'resize on window': 'calculatePoints'
    'load on window': 'calculatePoints'

  offsetTop: 80

  scrollConditions: [
    ['bottom', (state) -> pageYOffset > @points.end   && state == 'fixed']
    ['top',    (state) -> pageYOffset < @points.start && state != 'top']
    ['fixed',  (state) ->
      pageYOffset > @points.start && !(state in ['fixed', 'bottom']) ||
      pageYOffset < @points.end   &&   state == 'bottom'
    ]
  ]

  scrollStates:
    'top': ->
      @$block.css(position: '', top: '')

    'fixed': ->
      @$block.css(position: 'fixed', top: @offsetTop)

    'bottom': ->
      @$block.css(
        position: 'absolute'
        top: @$content.position().top + @$content.height() - @$block.height()
      )

  init: ->
    @$content = $('#index-content')

    @calculatePoints()

  onScroll: ->
    @scrollConditions
      .filter(([_, condition]) => condition.call(@, @state))
      .forEach(([state, _]) =>
        @state = state
        @scrollStates[state].call(@)
      )

  calculatePoints: ->
    @points =
      start: @$content.offset().top - @offsetTop
      end:   @$content.offset().top - @offsetTop + @$content.height() - @$block.height()