# Chat-space

  ## users table

  |Column|Type|Option|
  |------|----|------|
  |user_name|string|null: false, foreign_key: true|
  |address|string|null: false, foreign_key: true|
  |password|string|null: false, foreign_key: true|

  ### Association
  - has_many :message
  - belongs_to :group_users

  ## message table

    |Column|Type|Option|
    |------|----|------|
    |body|text|null: false, foreign_key: true|
    |image|string|null: false, foreign_key: true|
    |group_id|integer|null: false, foreign_key: true|
    |user_id|integer|null: false, foreign_key: true|

    ### Association
    - belongs_to :user
    - has_many :groups_users

  ## groups_usersテーブル

    |Column|Type|Options|
    |------|----|-------|
    |user_id|integer|null: false, foreign_key: true|
    |group_id|integer|null: false, foreign_key: true|

    ### Association
    - belongs_to :group
    - belongs_to :user
