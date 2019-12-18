json.content @message.content
json.user @message.user
json.group @message.group
json.image @message.image.url
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
