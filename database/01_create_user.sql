CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `is_admin` boolean,
  `email` varchar(255),
  `password`VARCHAR(255),
  `sex` VARCHAR(50),
  `age` int,
  `phone` VARCHAR(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP
);





