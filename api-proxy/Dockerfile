FROM nginx:latest

# remove the default configuration folder
RUN rm -r /etc/nginx/conf.d

# add our nginx config and content
ADD nginx.conf /etc/nginx/
