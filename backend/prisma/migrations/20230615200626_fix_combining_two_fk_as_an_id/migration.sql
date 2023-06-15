/*
  Warnings:

  - The primary key for the `inventories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `inventories` table. All the data in the column will be lost.
  - The primary key for the `invoice_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `invoice_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "inventories" DROP CONSTRAINT "inventories_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "inventories_pkey" PRIMARY KEY ("store_id", "product_id");

-- AlterTable
ALTER TABLE "invoice_items" DROP CONSTRAINT "invoice_items_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "invoice_items_pkey" PRIMARY KEY ("invoice_id", "product_id");
