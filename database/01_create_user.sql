CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `is_admin` boolean,
  `email` varchar(255),
  `sex` boolean,
  `age` int,
  `phone` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP
);





