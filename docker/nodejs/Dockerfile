FROM registry.access.redhat.com/ubi9/nodejs-22:latest

COPY . ${APP_ROOT}

USER 0

RUN chown -R 1001:0 ${APP_ROOT} && chmod -R ug+rwx ${APP_ROOT}

USER 1001

RUN rm -rf ${APP_ROOT}/dist \
    && npm ci --omit=dev \
    && npx tsc

EXPOSE 3000

CMD [ "/bin/bash", "-c", "node ${APP_ROOT}/dist/main.js" ]
