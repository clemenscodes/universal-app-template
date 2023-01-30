#!/bin/sh

DEVELOPMENT_PROJECT=""
PRODUCTION_PROJECT=""
APP=""
CLOUD_RUN_REGION=""
ARTIFACT_REGION=""
IMAGE_NAME=""
REGISTRY="docker.pkg.dev"
SHA=$(git rev-parse HEAD)
TAG="sha-$SHA"
IMAGE_COUNT_THRESHOLD=5

if [ -z "$1" ]; then
    echo "No configuration (development or production) was given" && exit 1
fi

push_image() {
    REPO="$ARTIFACT_REGION-$REGISTRY/$1/$APP"
    IMAGE="$REPO/$IMAGE_NAME"
    TAGGED_IMAGE="$IMAGE:$TAG"
    docker push "$TAGGED_IMAGE"
}

deploy() {
    push_image "$1"
    echo "gcloud run deploy $APP --image $TAGGED_IMAGE --allow-unauthenticated --region=$CLOUD_RUN_REGION --project=$1"
    gcloud run deploy "$APP" --image "$TAGGED_IMAGE" --allow-unauthenticated --region="$CLOUD_RUN_REGION" --project="$1" && cleanup
}

cleanup() {
    IMAGES=$(gcloud artifacts docker images list "$REPO" --include-tags --sort-by=CREATE_TIME | tail -n +2)
    echo "$IMAGES"
    IMAGE_COUNT=$(echo "$IMAGES" | wc -l | tr -d ' ')
    i="$IMAGE_COUNT_THRESHOLD"
    while [ $i -lt "$IMAGE_COUNT" ]; do
        OLD_TAG=$(echo "$IMAGES" | sed -n "${i}p" | awk '{print $3}')
        echo "gcloud artifacts docker images delete $IMAGE:$OLD_TAG"
        gcloud artifacts docker images delete "$IMAGE:$OLD_TAG" || exit 1
        i=$((i + 1))
    done
    exit 0
}

case "$1" in
    development) deploy "$DEVELOPMENT_PROJECT" ;;
    production) deploy "$PRODUCTION_PROJECT" ;;
    *) echo "Invalid configuration: $1" && exit 1 ;;
esac
