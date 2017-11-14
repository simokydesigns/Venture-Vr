CREATE TABLE IF NOT EXISTS  user (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    last_name varchar(40) NOT NULL,
    first_name varchar(40) NOT NULL,
    address varchar(40),
    contact_no varchar(64),
    email varchar(40),
    bio text(200),
    date_account_created timestamp
);

CREATE TABLE IF NOT EXISTS  video (
    video_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    video_title varchar(40) NOT NULL,
    genre varchar(40) NOT NULL,
    path varchar(255) NOT NULL,
    file_type varchar(20), 
    user_id BIGINT(20),
    date_video_created timestamp,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);





