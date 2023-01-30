#!/usr/bin/env bash

dir=$(dirname "$0")
dir=$(dirname "$dir")
dir=$(dirname "$dir")
dir=$(dirname "$dir")
lib_dir="$dir/api/models/node-api-models/src/lib"
api_dir="$lib_dir/api"
index="$api_dir/index.ts"
proto="tools/models/api.proto"
[ -d "$api_dir" ] && rm -rf "$api_dir"
yarn proto-loader-gen-types --longs=String --enums=String --grpcLib=@grpc/grpc-js --outDir="$lib_dir" "$proto"
rm "$lib_dir/api.ts"
files=$(ls "$api_dir")
files=$(echo "$files" | grep -v index.ts)
[ -f "$index" ] && rm "$index"
while read -r file; do
  echo "export * from './${file%.ts}';" >> "$index"
done <<< "$files"
NX_CLOUD_DISTRIBUTED_EXECUTION=false yarn nx format:write --projects=node-api-models --base="$NX_BASE" --head="$NX_HEAD"
