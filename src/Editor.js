import React from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


class Editor extends React.Component {
  constructor(props){
    super(props);
    this.getText = this.getText.bind(this);
    const initialText = `# Welcome to my React Markdown Previewer!\n## This is a sub-heading...
### And here's some othercool stuff:+0

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
    this.state = {
        plainText : initialText,
        markdownText :  marked.parse(initialText)
    }
  }

  

  getText(event){
      const inputText = event.target.value;
      this.setState({
          plainText: inputText,
          markdownText : marked.parse(inputText),
        }    
      );  
  }

  render(){
    return(
      <div>
        <div>
        <textarea id="editor"  onChange={this.getText} value= {this.state.plainText}>
        
        </textarea>
        </div>
        <div>
        <div id="preview"  dangerouslySetInnerHTML={{ __html: this.state.markdownText }}/> 
      </div>
      </div>
    );
  }
  
}

export default Editor;