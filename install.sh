#!/bin/bash

BUILD_DIR="build"
OUTPUT_DIR="/usr/share/lightdm-webkit/themes/venom"
INDEX="$BUILD_DIR/index.html"

if [ ! -d "$BUILD_DIR" ]; then
    echo "project needs to be built before installing. run npm run build first."
    exit 1
fi

sed -i 's/"\//"/g' "$INDEX"
rm -rf "$OUTPUT_DIR"
cp -r "$BUILD_DIR" "$OUTPUT_DIR"
