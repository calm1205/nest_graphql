
args=hoge

up:
	docker compose up -d

run:
	npm run build
	npm run start:dev

node:
	docker compose exec node bash

postgres:
	docker compose exec postgres bash

migrate-gen:
	npm run build
	npx typeorm migration:generate -n $(args)

migrate:
	npm run build
	npm run typeorm migration:run

seed:
	npm run build
	npm run seed:run

drop:
	npm run typeorm schema:drop

sample: 
	@echo 'args is $(args).'