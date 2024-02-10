import PetBlogCard from "../petBlogCard/PetBlogCard";

import cuteDog from "../../assets/images/S5/dog.png";
import cuteCat from "../../assets/images/S5/cat.svg";
import puppy from "../../assets/images/S5/Puppy.svg";
import kitten from "../../assets/images/S5/kitten.svg";
export default function BlogPet() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <PetBlogCard
          src={cuteDog}
          alt="Cute dog"
          srcMini={puppy}
          altMini="puppy"
          title="Dog Adoption Articles"
          disc="Learn more about caring for your new dog."
        />
        <PetBlogCard
          src={cuteCat}
          alt="Cute cat"
          srcMini={kitten}
          altMini="kitten"
          title="Cat Adoption Articles"
          disc="Helpful insights on what to expect."
        />
      </div>
    </>
  );
}
