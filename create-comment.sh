#!/bin/bash

set -eo pipefail

if [[ "${ISSUE_URL: -2}" == "/1" ]]; then
    node create-comment.js
fi
