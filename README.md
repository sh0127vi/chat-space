# Chat-space

## usersテーブル
|Column|Type|Option|
|------|----|------|
|id|string|null: false|
|user_name|string|null: false, unique: true|
|user_image|string||

### Association
- has_many :message
- has_many :group, through :groups_users


## messageテーブル
|Column|Type|Option|
|------|----|------|
|body|text|null: false|
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
|group_name|string|null: false|
|user_id|reference|null: false, foregin_key: true|

### Association
- has_many :massage
- has_many :user, through: groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
