# shopping center advertisement board management system 

In order to demostrate my understanding of microservice and also mitigate the configration, I choose to adapt to [Moleculer](https://moleculer.services)
# shopping center advertisement board management system 

In order to demostrate my understanding of microservice , and consider time limitation, also mitigate the configration, I choose to adapt to [Moleculer](https://moleculer.services)

### The architecture of this application is shown below 
![Application Architecture](/media/microservice-architecture.jpeg?raw=true "Application Architecture")

- #### As shown on the diagram, gateway is the only service expose externally, all other services talk bewteen each other through rabbitMQ. 
- #### All data modification record is sent to audit log service, in oder to keep trace any user make changes to data. 
- #### Data is store in MYSQL, users database is in auth service, shoppingCentreAsset has two tables: Shoppingcentres and Assets (1:M)
- #### For demonstration purpose, both MySQL and Elasticsearch has no disk mounted, hence, data will be lost when container restarts.

### Backend 
To start backend service: 
- step 1: Build images
This may take a while for first time building docker images
``` sh
$ docker-compose build
```
- step 2: start docker containers
``` sh
$ docker-compose up -d
```
to view logs
```sh
$ docker-compose logs -f
```
After services are up and running, the following API endpoints are avaiable: 
| API | Method | Require authorization header | Description |
| ------ | ------ |  ------ |  ------ | 
| localhost:4800/api/login |POST | FALSE | login to obtain JWT token |
| localhost:4800/api/shoppingCentres | GET | TRUE | get a list of shopping centres |
| localhost:4800/api/shoppingCentres | POST | TRUE | create a shopping list |
| localhost:4800/api/shoppingCentre/:id | PUT | TRUE | update a shopping list by ID |
| localhost:4800/api/shoppingCentre/:id | GET | TRUE | get a shopping list by ID |
| localhost:4800/api/shoppingCentre/:id | DELETE | TRUE | delete a shopping list by ID, also delete associate asset |
| localhost:4800/api/assets | GET | TRUE | get a list of asset |
| localhost:4800/api/assets??shoppingCentrId=id | GET | TRUE | get a list of asset by shopping centre ID|
| localhost:4800/api/assets | POST | TRUE | create an asset |
| localhost:4800/api/asset/:id | PUT | TRUE | update an asset |
| localhost:4800/api/asset/:id | GET | TRUE | get an asset by id |
| localhost:4800/api/asset/:id | DELETE | TRUE | delete an asset |

Seeded User:

| Username | Password |
| ------ | ------ |  
| admin@email.com | admin@email.com |
| guest@email.com | guest@email.com |

#### Full API documentation can be found at [here](https://documenter.getpostman.com/view/864080/RWgrxdNV)
#### For easily trying the API, A Postman file [postman-collection.json](postman-collection.json) is also included in the repo as well

### Frontend
Beacause of Time constraints, it has only login, just to demonstrate my ability of using react and redux. 
 To start front end: 
 ```sh
 $ cd client
 $ npm install
 $ npm start
 ```

 ### Limitations
 - #### [Moleculer](https://moleculer.services) has its own pros and cons (i.e. all services will depends on the same framework or technology). But for purpose of this practice, it is an easy way to demonstrate my skills.
 - #### In real production development, TDD should be considered. However, due the lack of time, I havev't written any unit tests.
 - #### Frontend only has login functionality
