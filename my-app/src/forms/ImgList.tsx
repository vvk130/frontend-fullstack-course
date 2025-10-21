export default function ImgList() {
  return (
    <div
      style={{
        width: 500,
        height: 500,
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 50px)',
        gridTemplateRows: 'repeat(10, 50px)',
        gap: 0,
      }}
    >
      {itemData.map((item, index) => (
        <img
          key={index}
          src={`${item.img}?w=50&h=50&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
          width={50}
          height={50}
          style={{
            display: 'block',
            border: '1px solid black', 
            boxSizing: 'border-box',    
          }}
        />
      ))}
    </div>
  );
}


const itemData = [
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_0,y_0/v1760099887/foal_a8kxhz.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_150,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_150,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_150,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_150,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
    {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_150,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_200,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Fern',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_250,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_300,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_350,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://res.cloudinary.com/dn4bwpln0/image/upload/c_crop,h_50,w_50,x_400,y_450/v1760099887/foal_a8kxhz.jpg',
    title: 'Bike',
  },
];