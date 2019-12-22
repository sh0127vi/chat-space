json.content @message.content
json.user_name @message.user.name
json.group @message.group
json.image @message.image.url
json.time @message.created_at.to_s
json.id @message.id