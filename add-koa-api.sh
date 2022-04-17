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

if [ $OUTDIR == 0 ]; then
  echo "No outdir set. Provide outdir using -o flag."
  exit
fi

if [ $PROJECT_NAME == 0 ]; then
  echo "No project_name set. Provide outdir using -n flag."
  exit
fi

OUT_LOCATION="$OUTDIR/$PROJECT_NAME"

echo "$OUT_LOCATION"

cp -R $BASEDIR/templates/koa-typescript/. $OUT_LOCATION/src

cd $OUT_LOCATION

npm install koa koa-compose koa-router koa-json
npm install -D @types/koa @types/koa-compose @types/koa-router @types/koa-json