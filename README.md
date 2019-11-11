# Chat-Space

## group_users table

| column | type | option |
|--------|------|--------|
| user_id | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user