=======================
NOTE: when working with more than one service:  
1. Move .gitignore to the root folder of your project.
2. Delete git folder in react app folder.    
3. Run: "git init" in the root folder of your project. 
=======================
# This is an example of docker-compose.yaml:
=======================
version: '3.8'

services:
    client:
        build: ./[path/to/Dockerfile]
        ports:
            - "3000:3000"
        networks:
           - [name-of-network]
        volumes:
           - ./[path/to/app/folder]:/app
        command: npm run start

    # other services...

networks:
  [name-of-network]:
    driver: bridge
=======================
# create docker-compose.yaml in the root folder of your project;
# run 'docker-compose up --build';
=======================
