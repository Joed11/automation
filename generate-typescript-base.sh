#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
OUTDIR=0
PROJECT_NAME=0

while getopts "n:o:" OPTION
do
	case $OPTION in
		o)
      OUTDIR=$OPTARG
			echo "Output directory set to $OPTARG"
			;;
		n)
      PROJECT_NAME=$OPTARG
			echo "Project name set to ${OPTARG}"
			;;
	esac
done

echo "before"

if [ $OUTDIR == 0 ]; then
  echo "No outdir set. Provide outdir using -o flag."
  exit
fi

if [ $PROJECT_NAME == 0 ]; then
  echo "No project_name set. Provide outdir using -n flag."
  exit
fi

echo "after"

OUT_LOCATION="$OUTDIR/$PROJECT_NAME"

echo "base dir ${BASEDIR}"
echo "out dir ${OUTDIR}"
echo "saving files to ${OUT_LOCATION}"

mkdir $OUT_LOCATION
mkdir $OUT_LOCATION/src
cp $BASEDIR/templates/jest/jest_config_base_template.js $OUT_LOCATION/jest.config.js
cp $BASEDIR/templates/jest/jest_config_unit_template.js $OUT_LOCATION/jest.config.unit.js
cp $BASEDIR/templates/jest/placeholder_test_template.ts $OUT_LOCATION/src/placeholderTest.spec.ts
cp $BASEDIR/templates/typescript/ts_config_template.json $OUT_LOCATION/tsconfig.json
cp $BASEDIR/node-scripts/edit-package-json.js $OUT_LOCATION/edit-package-json.js

cd $OUT_LOCATION

touch src/index.ts

echo "console.log('Hello World')" > src/index.ts

git init
npm init -y

node edit-package-json.js
rm edit-package-json.js

npm install -D typescript jest ts-jest eslint prettier @types/jest @types/node
