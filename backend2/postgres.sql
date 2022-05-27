CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    detail TEXT NOT NULL,
    facebook TEXT NOT NULL,
    created_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)
create table blog(
    blog_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    img TEXT,
    created_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)
create table comment(
    comment_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    comment_by_email TEXT,
    comment_by_firstname TEXT,
    blog_id TEXT,
    created_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)