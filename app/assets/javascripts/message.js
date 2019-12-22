$(function() {
  
  function buildHTML(message) {
    if (message.content && message.image) {
      let html = `<div class="right__content--text" data-message-id=` + message.id + `>
                    <div class="right__content--name">
                      ${message.user_name}
                      <span>
                        ${message.time}
                      </span>
                    </div>
                    <div class="right__content--message">
                      ${message.content}
                    </div>
                    <div>
                      <img class="lower-message__imager" src="${message.image}"
                    </div>
                   </div>`
      return html;

    } else if (message.content) {
      let html = `<div class="right__content--text" data-message-id=` + message.id + `} >
                    <div class="right__content--name">
                      ${message.user_name}
                      <span>
                        ${message.time}
                      </span>
                    </div>
                    <div class="right__content--message">
                      ${message.content}
                    </div>
                  </div>`
      return html;

    } else if (message.image) {
      let html = `<div class="right__content--text" data-message-id=` + message.id + `>
                    <div class="right__content--name">
                      ${message.user_name}
                      <span>
                        ${message.time}
                      </span>
                    </div>
                    <div>
                      <img class="lower-message__imager" src="${message.image}"
                    </div>
                  </div>`
        return html;
    };
  };

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

  let reloadMessages = function() {
    last_message_id = $('.right__content--text:last').data("message-id");
    $.ajax ({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.right__content').append(insertHTML);
        $('.right__content').animate({ scrollTop: $('.right__content')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
}); 