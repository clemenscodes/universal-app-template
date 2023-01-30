FROM gcr.io/distroless/nodejs16-debian11 as runner
WORKDIR /app
ENV PORT 3000
ENV HOST=0.0.0.0
ENV HOSTNAME=localhost
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV APP_DIR apps/clients/web/demo
COPY dist/$APP_DIR/.next/standalone ./
COPY dist/$APP_DIR/public ./$APP_DIR/public
COPY dist/$APP_DIR/.next/static ./dist/$APP_DIR/.next/static
EXPOSE $PORT
CMD ["apps/clients/web/demo/server.js"]
