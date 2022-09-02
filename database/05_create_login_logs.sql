CREATE TABLE `login_logs` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `login_date` timestamp,
  FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);