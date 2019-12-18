$(function() {

  function buildHTML(message) {
    if (message.image.url) {
      var html = `<div class="right__content--text">
                    <div class="right__content--name">
                      ${message.user.name}
                      <span>
                        ${message.created_at}
                      </span>
                    </div>
                    <div class="right__content--message">
                      ${message.content}
                    </div>
                    <div>
                      ${message.image.url}
                    </div>
                   </div>`
    } else {
      var html = `<div class="right__content--text">
                    <div class="right__content--name">
                      ${message.user.name}
                      <span>
                        ${message.created_at}
                      </span>
                    </div>
                    <div class="right__content--message">
                      ${message.content}
                    </div>
                  </div>`
    }
    return html;
  }

  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $(".right__content").append(html);
      $('.right__content').animate({ scrollTop: $('.right__content')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('#send').prop('disabled', false);
    })
    .fail(function() {
      alert('メッセージの送信に失敗しました');
    });
  });
}); 