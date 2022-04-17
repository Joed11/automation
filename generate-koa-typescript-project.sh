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
			echo "Project name set to $OPTARG"
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

/bin/bash generate-typescript-base.sh -o $OUTDIR -n $PROJECT_NAME

/bin/bash add-koa-api.sh -o $OUTDIR -n $PROJECT_NAME