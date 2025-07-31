import Card from "./Card";
import img7 from "../../assets/icons/image 7.svg";
import img8 from "../../assets/icons/image 8.svg";
import img9 from "../../assets/icons/image 9.svg";
import img10 from "../../assets/icons/image 10.svg";


const Info = () => {
  return (
    <>
      <section className="info-t mt-[64px]">
        <div className="my-container text-center">
          <h1 className="text-[48px] font-bold">You might also like</h1>
          <div className="flex justify-between mt-[55px]">
            <Card
              imageUrl={img7}
              price={212}
              rating={4}
              title="Polo with Contrast Trims"
              discount={20}
            />
            <Card
              imageUrl={img8}
              price={145}
              rating={3.5}
              title="Gradient Graphic T-shirt"
            />
            <Card
              imageUrl={img9}
              price={180}
              rating={4.5}
              title="Polo with Tipping Details"
            />
            <Card
              imageUrl={img10}
              price={120}
              rating={5}
              title="Black Striped T-shirt"
              discount={30}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
