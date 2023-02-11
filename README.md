# Django-Vue-CRUD
 CRUD: Product management system built with Django, Django Rest Framework and Vue.js
 
 ![products home-ANIMATION](https://user-images.githubusercontent.com/80118088/218264139-1849645d-c570-4e9a-8bf5-e519c1cbbc3b.gif)


## Backend

### Requirements
 Python 3.9.2

### Installation
 ```
 cd Backend 
 ```
 
 ```
 pip install -r requirements.txt
 ```
 
### Migrations
 ```
 python manage.py makemigrations
 ```
 ```
 python manage.py migrate 
 ```

### Run project
 ```
 python manage.py runserver
 ```

## Endpoints

### Product

 ```JSON
{
    "name": "Product 1",
    "quantity": 1,
    "price": 1.00,
    "description": "Description related to the product 1"
}
```

## Frontend

### Requirements
 Node 16.13.0
 
### Project setup
```
cd Frontend/client
```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
