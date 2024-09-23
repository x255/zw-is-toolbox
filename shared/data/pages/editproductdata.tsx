export const option1 = [
    { value: "Category", label: "Category" },
    { value: "Clothing", label: "Clothing" },
    { value: "Footwear", label: "Footwear" },
    { value: "Accesories", label: "Accesories" },
    { value: "Grooming", label: "Grooming" },
    { value: "Watches", label: "Watches" },
    { value: "Ethnic & Festive", label: "Ethnic & Festive" },
    { value: "Jewellery", label: "Jewellery" },
    { value: "Toys & Babycare", label: "Toys & Babycare" },
    { value: "Festive Gifts", label: "Festive Gifts" },
    { value: "Kitchen", label: "Kitchen" },
    { value: "Dining", label: "Dining" },
    { value: "Home Decors", label: "Home Decors" },
    { value: "Stationery", label: "Stationery" }
];
export const option2 = [
    { value: "Select", label: "Select" },
    { value: "All", label: "All" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" }
];
export const option3 = [
    { value: "", label: "Select" },
    { value: "Extra Small", label: "Extra Small" },
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
    { value: "Extra Large", label: "Extra Large" },
];
export const option4 = [
    { value: "", label: "Select" },
    { value: "Armani", label: "Armani" },
    { value: "Lacoste", label: "Lacoste" },
    { value: "Puma", label: "Puma" },
    { value: "Spykar", label: "Spykar" },
    { value: "Mufti", label: "Mufti" },
    { value: "Home Town", label: "Home Town" },
    { value: "Arrabi", label: "Arrabi" }
];

export const option5 = [
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
    { value: "Red", label: "Red" },
    { value: "Orange", label: "Orange" },
    { value: "Yellow", label: "Yellow" },
    { value: "Green", label: "Green" },
    { value: "Blue", label: "Blue" },
    { value: "Pink", label: "Pink" },
    { value: "Purple", label: "Purple" },
];
export const option6 = [
    { value: "Select", label: "Select" },
    { value: "Published", label: "Published" },
    { value: "Scheduled", label: "Scheduled" }
];
export const option7 = [
    { value: "Relaxed", label: "Relaxed" },
    { value: "Solid", label: "Solid" },
    { value: "Washed", label: "Washed" },
    { value: "Plain", label: "Plain" }
];
export const option8 = [
    { value: "Select", label: "Select" },
    { value: "In Stock", label: "In Stock" },
    { value: "Out Of Stock", label: "Out Of Stock" }
];

//Category

export const Categorydata=[
    {value:"Category" , label:"Category"},
    {value:"Clothing" , label:"Clothing"},
    {value:"Footwear" , label:"Footwear"},
    {value:"Accesories" , label:"Accesories"},
    {value:"Grooming" , label:"Grooming"},
    {value:"Watches" , label:"Watches"},
    {value:"Ethnic & Festive" , label:"Ethnic & Festive"},
    {value:"Jewellery" , label:"Jewellery"},
    {value:"Toys & Babycare" , label:"Toys & Babycare"},
    {value:"Festive Gifts" , label:"Festive Gifts"},
    {value:"Kitchen" , label:"Kitchen"},
    {value:"Dining" , label:"Dining"},
    {value:"Home Decors" , label:"Home Decors"},
    {value:"Stationery" , label:"Stationery"}
    ];
    
    //Gender

    export const Genderdata=[
    {value:"Select", label:"Select"},
    {value:"All", label:"All"},
    {value:"Male", label:"Male"},
    {value:"Female", label:"Female"},
    {value:"Others", label:"Others"}
    ];

    //Size

    export const Sizedata=[
    { value:"" ,label:"Select"},
    {value:"Extra Small" ,label:"Extra Small"},
    {value:"Small" ,label:"Small"},
    {value:"Medium" ,label:"Medium"},
    {value:"Large" ,label:"Large"},
    {value:"Extra Large" ,label:"Extra Large"},
    ];

    //Brand

    export const Branddata=[
    {value:"" ,label:"Select"},
    {value:"Armani" ,label:"Armani"},
    {value:"Lacoste" ,label:"Lacoste"},
    {value:"Puma" ,label:"Puma"},
    {value:"Spykar" ,label:"Spykar"},
    {value:"Mufti" ,label:"Mufti"},
    {value:"Home Town" ,label:"Home Town"},
    {value:"Arrabi" ,label:"Arrabi"}
    ];
    
    //Colors

     export const Colorsdata=[
    {value:"White" , label:"White"},
     {value:"Black" , label:"Black"},
     {value:"Red" , label:"Red"},
     {value:"Orange" , label:"Orange"},
     {value:"Yellow" , label:"Yellow"},
     {value:"Green" , label:"Green"},
     {value:"Blue" , label:"Blue"},
     {value:"Pink" , label:"Pink"},
     {value:"Purple" , label:"Purple"},
     ];
    
     //Published Status

     export const Publisheddata=[
    {value:"Select", label:"Select"},
    {value:"Published", label:"Published"},
    {value:"Scheduled", label:"Scheduled"}
    ];

    //Product Tags

    export const Productsdata=[
    {value:"Relaxed", label:"Relaxed"},
    {value:"Solid", label:"Solid"},
    {value:"Washed", label:"Washed"},
    {value:"Plain", label:"Plain"}
    ];

    //Availability

    export const Availabilitydata=[
    {value:"Select", label:"Select"},
    {value:"In Stock", label:"In Stock"},
    {value:"Out Of Stock", label:"Out Of Stock"}
    ];
    
import dynamic from "next/dynamic";
import { Component } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const defaultContent = `
.Care Instructions: Machine Wash <br/>

.Neckline: The pullover is framed with a Crew Neck <br/>

.Fit Type: Regular Fit <br/>

.Long Sleeves: The pullover is designed with Long Sleeves. <br/>

.Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours. <br/>

.Solid: The pullover is available in solid pattern.<br/>
`;

export class Editor2 extends Component {
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

  constructor(props) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
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

export default Editor2;
