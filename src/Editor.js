import React from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import  { marked }from "https://cdnjs.cloudflare.com/ajax/libs/marked/15.0.6/lib/marked.esm.min.js";


class Editor extends React.Component {
  constructor(props){
    super(props);
    this.getText = this.getText.bind(this);
    this.state = {
        markdownText : "",
        plainText : ""
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
        <textarea id="editor"  onKeyUp={this.getText}>
          {this.state.plainText}
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