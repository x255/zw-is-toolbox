
//blog-tags

interface option1 {
    value:string;
    label:string;
}
export const option :option1[]= [
    { value: 'Top Blog ', label: 'Top Blog ' },
    { value: 'Blogger', label: 'Blogger' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Landscape', label: 'Landscape' }
];

interface option2 {
    value:string;
    label:string;
    isDisabled:string;
}
//Published Status


//blog-category
interface option3 {
    value:string;
    label:string;
}


interface blogdata{
    id:number;
    src:string;
    title:string;
    text:string;
    time:string;
}


export const Selectdata1 :option1[] = [
    { value: 'Select Category', label: 'Select Category' },
    { value: 'Nature', label: 'Nature' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Food', label: 'Food' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Beauty', label: 'Beauty' },
];
export const Selectdata2 :option2[] = [
    { value: 'Select ', label: 'Select ', isDisabled: 'isDisabled' },
    { value: 'Hold', label: 'Hold',isDisabled:""},
    { value: 'Published', label: 'Published',isDisabled:""},

];
export const Selectdata3:option3[] = [
    { value: 'Top Blog ', label: 'Top Blog ' },
    { value: 'Blogger', label: 'Blogger' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Landscape', label: 'Landscape' }

];

export const Recentblogdata :blogdata[] = [
    { id: 1, src: "../../../assets/images/media/media-39.jpg", title: 'Animals', text: 'There are many variations', time: '24,Nov 2022 - 18:27' },
    { id: 2, src: "../../../assets/images/media/media-56.jpg", title: 'Travel', text: 'Latin words, combined', time: '28,Nov 2022 - 10:45' },
    { id: 3, src: "../../../assets/images/media/media-54.jpg", title: 'Interior', text: 'Contrary to popular b', time: '30,Nov 2022 - 08:32' },
    { id: 4, src: "../../../assets/images/media/media-52.jpg", title: 'Nature', text: 'It was popularised in th', time: '3,Dec 2022 - 12:56' },
    { id: 5, src: "../../../assets/images/media/media-74.jpg", title: 'Health', text: 'It was popularised in', time: '16,Dec 2022 - 04:56' },
    { id: 6, src: "../../../assets/images/media/media-49.jpg", title: 'Food', text: 'It was popularised in', time: '31,Dec 2022 - 18:06' },
    { id: 7, src: "../../../assets/images/media/media-76.jpg", title: 'Travel', text: 'It was popularised in the', time: '15,Dec 2022 - 14:31' }
];