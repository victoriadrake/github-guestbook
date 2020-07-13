#!/bin/bash

set -eo pipefail

if [[ "${ISSUE_URL: -2}" == "/1" ]]; then
    printf '%b\n' "\r\n<div class=\"comment\"><p>${AUTHOR} says:</p><p>${COMMENT//[^a-zA-Z0-9_ ]}</p><p>${DATE}</p></div>\r\n" > ${FOLDER}/${ID}.html
fi
