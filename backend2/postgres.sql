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