const fs = require('fs');

const commentHtml = `
<div class="comment">
  <p>${process.env.AUTHOR} says:</p>
  <p>${process.env.COMMENT}</p>
</div>
`;

fs.mkdir(process.env.FOLDER, (err) => {
    if (err) throw err;
    const filepath = `${process.env.FOLDER}/${process.env.ID}.html`;
    fs.writeFile(filepath, commentHtml, (err) => {
        if (err) throw err;
        console.log(`Saved at ${filepath}`);
    });
});

