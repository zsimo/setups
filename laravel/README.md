 - install laravel
     ```sh
     composer create-project --prefer-dist laravel/laravel blog
     ```
 - directory permissions
     ```sh
     chmod -R 777 storage
     chmod -R 777 bootstrap/cache
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
