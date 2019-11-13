# Chat-space

## usersテーブル
|Column|Type|Option|
|------|----|------|
|id|string|null: false|
|name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups, through :groups_users
- has_many :groups_users


## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|group_id|reference|null:false, foreign_key: true|
|user_id|reference|null: false, foreign_key:true|

### Association
- belongs_to :user
- belongs_to :group


## groupテーブル
|Column|Type|Option|
|------|----|------|
|id|string|null: false|
|name|string|null: false|

### Association
- has_many :massages
- has_many :users, through: groups_users
- has_many :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
