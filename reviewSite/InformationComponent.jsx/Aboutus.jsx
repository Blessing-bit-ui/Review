
import aboutus from "../src/assets/reviewaboutus2.jpg";
function Aboutus(){
    return(
    <div className=" w-screen h-screen " >
         <div
          className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat
      h-[100px]
      "> 
      <h1 className="text-green-700 text-[35px] font-bold mb-4 mt-4">
      About Us</h1>
      </div>
        <div className="flex w-10/12 justify-center ml-auto mr-auto gap-7 ">
        <div className="w-6/12 text-justify">
      Review Africa is a trusted platform dedicated to increasing the visibility
      of African businesses, particularly small and medium-sized enterprises
      (SMEs). Our mission is to connect African businesses with customers,
      partners, and investors across Africa and around the world. We believe
      that African businesses have enormous potential, but many struggle to gain
      exposure and credibility beyond their local markets. Review Africa helps
      bridge this gap by providing a platform where businesses can showcase
      their products and services while allowing customers to share honest
      reviews and experiences. By promoting transparency through ratings and
      reviews, Review Africa helps build trust between businesses and customers.
      This makes it easier for people, whether they are in Africa or abroad, to
      discover reliable businesses, make informed decisions, and engage with
      confidence. Our goal is not only to increase the visibility of African
      businesses but also to strengthen trust in African entrepreneurship and
      innovation. Through trusted reviews and business profiles, we aim to
      create a community where businesses can grow, customers can connect
      safely, and African enterprises can reach a global audience.
      </div>
      
      <img src={aboutus} alt="africanbusiness" className=" w-5/12"/>
      </div>
    </div>
    )
}
export default Aboutus