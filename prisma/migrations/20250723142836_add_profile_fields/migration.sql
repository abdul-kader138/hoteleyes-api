/*
  Warnings:

  - You are about to drop the column `about_me` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `about_me`,
    ADD COLUMN `address` TEXT NULL,
    ADD COLUMN `country` VARCHAR(50) NULL,
    ADD COLUMN `date_of_birth` DATETIME(3) NULL,
    ADD COLUMN `gender` VARCHAR(20) NULL,
    ADD COLUMN `hotel_name` VARCHAR(100) NULL,
    ADD COLUMN `is_admin_verified` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `phone_number` VARCHAR(20) NULL;
