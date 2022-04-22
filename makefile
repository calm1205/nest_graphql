
args=hoge

up:
	docker compose up -d

run:
	npm run start:run

node:
	docker compose exec node bash

postgres:
	docker compose exec postgres bash

migration-gen:
	npm run typeorm migration:generate -n $(args)

migrate:
	npm run build
	npm run typeorm migration:run

seed:
	npm run build
	npm run seed:run

db-drop:
	npm run typeorm schema:drop

sample: 
	@echo 'args is $(args).'