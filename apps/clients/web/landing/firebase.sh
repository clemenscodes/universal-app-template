#!/bin/sh

DEVELOPMENT_PROJECT=""
PRODUCTION_PROJECT=""
APP="landing"
APP_DIR="apps/clients/web/$APP"
FIREBASE_DIST="$APP_DIR/dist"
EXPORTED="dist/$APP_DIR/exported"
FIREBASE="firebase -c $APP_DIR/firebase.json"

if [ -z "$1" ]; then
    echo "No configuration (development or production) was given" && exit 1
fi

[ -d "$EXPORTED" ] || npx nx export web-"$APP" --skip-nx-cach
[ -d "$FIREBASE_DIST" ] && rm -rf "$FIREBASE_DIST"
cp -r $EXPORTED $FIREBASE_DIST

deploy() {
    echo "$FIREBASE deploy --project=$1"
    $FIREBASE deploy --project="$1" && exit 0
    exit 1
}

case "$1" in
    development) deploy "$DEVELOPMENT_PROJECT" ;;
    production) deploy "$PRODUCTION_PROJECT" ;;
    *) echo "Invalid configuration: $1" && exit 1 ;;
esac
