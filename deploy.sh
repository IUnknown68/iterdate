#!/usr/bin/env bash
set -e

# Check repository status
CHANGES=$(git status -s)
if [[ ! -z $CHANGES ]]; then
  echo "Repository has changes:"
  echo $CHANGES
  exit 1
fi

echo "OK."

# Build
yarn lint && yarn test && yarn rollup
git add dist/*

# Increment version number
yarn version --message "Version %s" --$1

# push
git push --tags

# publish
yarn publish --access public
