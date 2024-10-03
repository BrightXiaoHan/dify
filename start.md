```
screen -S dify_api1
conda activate dify_api
cd api/
poetry run python -m celery -A app.celery worker -P gevent -c 1 --loglevel INFO -Q dataset,generation,mail,ops_trace,app_deletion

screen -S dify_api2
conda activate dify_api
cd api/
poetry run python -m flask run --host 0.0.0.0 --port=5001 --debug

screen -S dify_web
cd web/
sudo npm run start
```