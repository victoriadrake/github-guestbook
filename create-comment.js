const fs = require('fs')

const commentHtml = `
<div class="comment">
  <p>${process.env.AUTHOR} says:</p>
  <p>${process.env.COMMENT}</p>
</div>
`

fs.writeFile(`${process.env.FOLDER}/${process.env.ID}.html`, commentHtml)
