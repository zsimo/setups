 - install laravel
     ```sh
     composer create-project --prefer-dist laravel/laravel blog
     ```

 - generate APP_KEY
     ```sh
     php artisan key:generate
     ```

 - create db
     ```sh
     touch database/database.sqlite
     ```

 - fill the db
     ```sh
     php artisan migrate
     ```

  - create base auth service
      ```sh
      php artisan make:auth
      ```

 - start dev server
     ```sh
     php artisan serve
     ```
