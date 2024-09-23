export const multiselectdata = [
  { value: 'Angelina May', label: 'Angelina May' },
  { value: 'Kiara advain', label: 'Kiara advain' },
  { value: 'Hercules Jhon', label: 'Hercules Jhon' },
  { value: 'Mayor Kim', label: 'Mayor Kim' },
  { value: 'Alexa Biss', label: 'Alexa Biss' },
  { value: 'Karley Dia', label: 'Karley Dia' },
  { value: 'Darren Sami', label: 'Darren Sami' },
  { value: 'Elizabeth', label: 'Elizabeth' },
  { value: 'Bear Gills', label: 'Bear Gills' },
  { value: 'Alex Carey', label: 'Alex Carey' }
];

export const Multipleselectdata = [
  { value: 1, label: 'High' },
  { value: 2, label: 'Low' },
  { value: 3, label: 'Medium' },
];
export const Multipleselectdata1 = [
  { value: 1, label: 'Completed' },
  { value: 2, label: 'Inprogress' },
  { value: 3, label: 'On-hold' },
];

import dynamic from "next/dynamic";
import { Component } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
const defaultContent = `
lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.<br/>
<br/>

1.Conducting a comprehensive analysis of the existing website design. <br/>

2.Collaborating with the UI/UX team to develop wireframes and mockups. <br/>

3.Iteratively refining the design based on feedback../li&gt;. <br/>

4.Implementing the finalized design changes using HTML, CSS, and JavaScript. <br/>

5.Testing the website across different devices and browsers.<br/>
`;

export class Editor3 extends Component {
  static modules = {
    toolbar: [
      [{ "header": "1" }, { "header": "2" }, { "font": [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ "list": "ordered" }, { "list": "bullet" },
      { "indent": "-1" }, { "indent": "+1" }],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  static formats = [
    "header", "font", "size",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent",
    "link", "image", "video"
  ];

  constructor(props: {}) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html: any) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme: any) {
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <SunEditor defaultValue={defaultContent} />
      </div>
    );
  }
}

export default Editor3;
