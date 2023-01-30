#!/bin/sh

INPUT_TAGS="sha-$(git rev-parse HEAD)" yarn affected docker --parallel="$1" --output-style=stream development
INPUT_TAGS="sha-$(git rev-parse HEAD)" yarn affected docker --parallel="$1" --output-style=stream production
npx nx affected --parallel="$1" --output-style=stream --target=deploy   development
npx nx affected --parallel="$1" --output-style=stream --target=deploy   production
npx nx affected --parallel="$1" --output-style=stream --target=firebase development
npx nx affected --parallel="$1" --output-style=stream --target=firebase production
