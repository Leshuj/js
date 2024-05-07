FROM php:8.1-fpm
ARG BUILDKIT_STEP_LOG_MAX_SIZE=-1
ARG BUILDKIT_STEP_LOG_MAX_SPEED=-1
RUN apt-get update && apt-get install -y mc

RUN apt-get update -y \
  && apt-get install -y \
     libxml2-dev \
  && apt-get clean -y \
  && docker-php-ext-install soap
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

COPY *.conf /usr/local/etc/php-fpm.d/

RUN rm -rf /var/www/html

ARG USER_ID
ARG GROUP_ID

RUN if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
    userdel -f www-data &&\
    if getent group www-data ; then groupdel www-data; fi &&\
    groupadd -g ${GROUP_ID} www-data &&\
    useradd -l -u ${USER_ID} -g www-data www-data &&\
    install -d -m 0755 -o www-data -g www-data /home/www-data &&\
    chown --changes --silent --no-dereference --recursive \
          --from=33:33 ${USER_ID}:${GROUP_ID} \
        /home/www-data \
;fi

USER www-data

