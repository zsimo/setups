 - install laravel
     ```sh
     composer create-project --prefer-dist laravel/laravel blog
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

 - start dev server
     ```sh
     php artisan serve
     ```
