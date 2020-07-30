#!/bin/bash

set -eo pipefail

if [[ "${ISSUE_URL: -2}" == "/1" ]]; then
    node src/create-comment.js
fi
