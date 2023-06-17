# Point of Sale Solution

## How to run it

1. Install all dependencies\
   `npm install`

2. Create a .env file following the example file '.env.example'

3. Build docker container\
   `docker compose up -d`

4. Migrate database\
   `npx prisma migrate dev`

5. Start the server\
   `npm run start:dev`
