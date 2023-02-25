import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "./carousel/swiper-bundle.min.css";
import FoodItem from "./foodItem";
import food1 from "../../assets/foods/food1.jpg";
import food2 from "../../assets/foods/food2.jpg";
import food3 from "../../assets/foods/food3.jpg";
import food4 from "../../assets/foods/food4.jpg";
import food5 from "../../assets/foods/food5.jpg";
import food6 from "../../assets/foods/food6.jpg";
import food7 from "../../assets/foods/food7.jpg";
import food8 from "../../assets/foods/food8.jpg";

const MenuFood = function () {
  let foods = {
    food1: {
      photo: food1,
      name: "Amet donec.",
      mass: "200 гр",
      describe:
        "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
      price: "559 $",
    },
    food2: {
      photo: food2,
      name: "Amet donec.",
      mass: "500 гр",
      describe:
        "Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.",
      price: "509 $",
    },
    food3: {
      photo: food3,
      name: "Amet donec.",
      mass: "400 гр",
      describe:
        "Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet.",
      price: "689 $",
    },
    food4: {
      photo: food4,
      name: "Amet donec.",
      mass: "200 гр",
      describe:
        "Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.",
      price: "329 $",
    },
    food5: {
      photo: food5,
      name: "Amet donec.",
      mass: "300 гр",
      describe:
        "In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.",
      price: "499 $",
    },
    food6: {
      photo: food6,
      name: "Amet donec.",
      mass: "500 гр",
      describe:
        "Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.",
      price: "1199 $",
    },
    food7: {
      photo: food7,
      name: "Amet donec.",
      mass: "100 гр",
      describe:
        "In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis. ",
      price: "349 $",
    },
    food8: {
      photo: food8,
      name: "Amet donec.",
      mass: "300 гр",
      describe:
        "Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.",
      price: "729 $",
    },
  };

  foods = Object.values(foods);

  SwiperCore.use([Autoplay]);

  return (
    <div className="menu-food">
      <li className="menu-food__button">Top “Manhattan” menu</li>
      <h1 className="menu-food__title">Кухня</h1>
      <div className="menu-food__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {(window.innerWidth <= 400 && (
            <>
              <SwiperSlide>
                {foods.slice(0, 1).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(1, 2).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(2, 3).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(3, 4).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(4, 5).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(5, 6).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(6, 7).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(7, 8).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
            </>
          )) || (
            <>
              <SwiperSlide>
                {foods.slice(0, 2).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(2, 4).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(4, 6).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {foods.slice(6, 8).map((food) => (
                  <FoodItem key={`${food.name}-${food.price}`} {...food} />
                ))}
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default MenuFood;
