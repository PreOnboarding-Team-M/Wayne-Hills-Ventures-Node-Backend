CREATE TABLE `freeBoard` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `title` varchar(255),
  `contents` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);
