Component.define 'promoTeasers',
  init: ->
    $.getJSON 'https://www.inmyroom.ru/front_api/promo_teasers.json', (teasers) =>
      @$block.append(teasers.map(@render).join(''))

  render: (data) ->
    """
      <div class="promo-block">
        <a class="promo-preview" href="#{data.url}">
          <img src="#{data.image_url}"/>
          <div class="promo-preview_brand">#{data.title}</div>
          <div class="promo-preview_title">#{data.description}</div>
        </a>
      </div>
    """
