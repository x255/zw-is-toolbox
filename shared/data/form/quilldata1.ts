import { Component } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const defaultContent = `
  <h4><b className="ql-size-large">Quill Bubble</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <p><br/></p>
  <ol>
      <li className="ql-size-normal">Write text, select and edit with multiple options.</li>
      <li className="">This is quill bubble editor.</li>
      <li className="">Easy to customize and flexible.</li>
  </ol>
  <p><br/></p>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

class Editor1 extends Component {
  static modules = {
    toolbar: false, // Disable the toolbar
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  constructor(props) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: 'bubble' }; // Set the theme to 'bubble'
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div>
         <SunEditor defaultValue={defaultContent} />
      </div>
    );
  }
}

export default Editor1;
