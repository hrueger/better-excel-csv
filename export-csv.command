#!/bin/bash
cd "$(dirname "$0")"
npx --yes better-excel-csv && exit 0 || read -p "Press any key to continue..."
