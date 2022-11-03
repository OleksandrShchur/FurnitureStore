# FurnitureStore

## Setup Database
- install postgresql 13 or higher, and restore database (db name - furniture_store)

## Setup and run server
- install python 3.9 
- cd to the directory with Furniture.Store/Server/store folder
- create virtual env: python -m venv venv
- activate env: venv\Scripts\activate
- install dependencies: pip install -r ../requirements.txt
- find the file settings.py in Furniture.Store\Server\store\store directory and change 'USER' and 'PASSWORD' in DATABASE section
- cd to directory Furniture.Store/Server/store with manage.py
- run the commant *manage.py runserver* or *python manage.py runserver*
- the server is running on http://127.0.0.1:8000/

## Setup and run Angular App
- cd to folder Furniture.Store\furniture.web
- run *npm i*
- run *ng serve* or *ng serve --watch*
- the app is running on http://localhost:4200 