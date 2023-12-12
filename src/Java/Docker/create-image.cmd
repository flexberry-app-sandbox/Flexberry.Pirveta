docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pirveta-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t pirveta-java/app ../../..
