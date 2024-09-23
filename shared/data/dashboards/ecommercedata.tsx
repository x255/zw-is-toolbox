const icon1 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white primary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>

const icon2 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white secondary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>

const icon3 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>

const icon4 = <svg xmlns="http://www.w3.org/2000/svg" className="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>

export const carddata = [
    { icon: icon1, text1: 'Total Sales', text2: '14,732', text3: 'Increased by', text4: '+4.2%', text5: ' this month', color: 'primary-transparent', color2: 'success-transparent' },
    { icon: icon2, text1: 'Total Expenses', text2: '$28,346.00', text3: 'Increased by', text4: '+12.0%', text5: ' this month', color: 'secondary-transparent', color2: 'success-transparent' },
    { icon: icon3, text1: 'Total Visitors', text2: '1,29,368', text3: 'Decreased by', text4: '-7.6%', text5: ' this month', color: 'success-transparent', color2: 'danger-transparent' },
    { icon: icon4, text1: 'Total Orders', text2: '35,367', text3: 'Increased by', text4: '+2.5%', text5: ' this month', color: 'warning-transparent', color2: 'success-transparent' },
]
//Recentorders

export const Recentorders = [
    { src: "../../assets/images/ecommerce/jpg/1.jpg", text1: 'Smart Phone', text2: 'Mobiles', text3: '$199.99', color: 'success' ,class:"mb-3"},
    { src: '../../assets/images/ecommerce/jpg/2.jpg', text1: 'White Headphones', text2: 'Music', text3: '$79.49', color: 'success',class:"mb-3" },
    { src: '../../assets/images/ecommerce/jpg/3.jpg', text1: 'Stop Watch', text2: 'Electronics', text3: '$49.29', color: 'success',class:"mb-3" },
    { src: '../../assets/images/ecommerce/jpg/4.jpg', text1: 'Kikon Camera', text2: 'Electronics', text3: '$1,699.00', color: 'success',class:"mb-3" },
    { src: '../../assets/images/ecommerce/jpg/5.jpg', text1: 'Photo Frame', text2: 'Furniture', text3: '$29.99', color: 'success',class:"mb-3" },
    { src: '../../assets/images/ecommerce/jpg/6.jpg', text1: 'Canvas Shoes', text2: 'Footwear', text3: '$89.99', color: 'success',class:"mb-0" },
]

//Top Selling Products

export const Topsellingproducts = [
    { src: "../../assets/images/ecommerce/png/36.png", text1: ' Niker College Bag', text2: '#1734-9743', text3: '$199.99', text4: 'Available', text5: '3,903', text6: '$67,899.24', color: 'success-transparent' },
    { src: "../../assets/images/ecommerce/png/37.png", text1: 'Dslr Camera (50mm f/1.9 HRM Lens)', text2: '#1234-4567', text3: '	$1,299.99', text4: 'Available', text5: '12,435', text6: '$3,24,781.92', color: 'success-transparent' },
    { src: "../../assets/images/ecommerce/png/38.png", text1: 'Outdoor Bomber Jacket', text2: '#1902-9883', text3: '$99.99', text4: 'Not Available', text5: '5,143', text6: '$76,102.76', color: 'danger-transparent' },
    { src: "../../assets/images/ecommerce/png/39.png", text1: 'Light Blue Teddy', text2: '#8745-1232', text3: '$79.00', text4: 'Limited Deal', text5: '7,183', text6: '$78,211.83', color: 'warning-transparent' },
    { src: "../../assets/images/ecommerce/png/40.png", text1: 'Orange Smart Watch (24mm)', text2: '#1962-9033', text3: '$199.99', text4: 'In Offer', text5: '10,287', text6: '$2,32,982.99', color: 'primary-transparent' },
]
//
export const Countries = [
    { id: 1, src: "../../assets/images/flags/french_flag.jpg", text: 'France', class1: 'up', class2: 'mb-3', color: 'success', price: '5,932' },
    { id: 2, src: "../../assets/images/flags/spain_flag.jpg", text: 'spain', class1: 'down', class2: 'mb-3', color: 'danger', price: '5,383' },
    { id: 3, src: "../../assets/images/flags/argentina_flag.jpg", text: 'Argentina', class1: 'up', class2: 'mb-3', color: 'success', price: '4,825' },
    { id: 4, src: "../../assets/images/flags/uae_flag.jpg", text: 'Uae', class1: 'up', class2: 'mb-3', color: 'success', price: '4,527' },
    { id: 5, src: "../../assets/images/flags/germany_flag.jpg", text: 'Germany', class1: 'down', class2: 'mb-0', color: 'danger', price: '4,501' }
];
