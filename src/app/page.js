import Image from "next/image";
import styles from "../../styles/index.module.css";
import { Young_Serif } from "next/font/google";

const young_serif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

const Index = () => {
  return (
    <>
      <article className={styles.principal__table}>
        <div className={styles.secundary__table}>
          <Image
            src="/omelette.jpeg"
            alt="Recipe Food"
            width={650}
            height={250}
            className={styles.image__food}
          />

          <section className={styles.secundary__description}>
            <h1
              className={`${young_serif.className} ${styles.title__omellete}`}
            >
              Simple Ommellete Recipe
            </h1>

            <p className={styles.description}>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled whit your choice of cheese, vegetable, or meats.
            </p>
          </section>

          <section className={styles.preparation__recipe}>
            <div className={styles.preparation__recipe__title}>
              Preparation time
            </div>

            <ul>
              <li className={styles.preparation__recipe__li}>
                <spam className={styles.preparation__recipeSpam}>Total</spam>:
                Approximately 10 minutes
              </li>
              <li className={styles.preparation__recipe__li}>
                <spam className={styles.preparation__recipeSpam}>
                  Preparation
                </spam>
                : 5 minutes
              </li>
              <li className={styles.preparation__recipe__li}>
                <spam className={styles.preparation__recipeSpam}>Cooking</spam>:
                5 minutes
              </li>
            </ul>
          </section>

          <section className={styles.recipe__third}>
            <div
              className={`${young_serif.className} ${styles.recipe__ingredients}`}
            >
              Ingredients
            </div>

            <ul>
              <li className={styles.recipe__ingredients__li}>
                2-3 large eggs
              </li>
              <li className={styles.recipe__ingredients__li}>
                Salt, to taste
              </li>
              <li className={styles.recipe__ingredients__li}>
                Pepper, to taste
              </li>
              <li className={styles.recipe__ingredients__li}>
                1 tablespoon of butter or oil
              </li>
              <li className={styles.recipe__ingredients__li}>
                Optional fillings: cheese, decided vegetables, cooked meats,
                herbs
              </li>
            </ul>
          </section>

          <section>
            <div
              className={`${young_serif.className} ${styles.fourth__section}`}
            >
              Instructions
            </div>

            <ol>
              <li className={styles.fourth__section__li}>
                <span className={styles.fourth__span}>Beat the eggs</span>:In a
                bowl, beat the eggs with a pinch of salt and pepper until they
                are well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className={styles.fourth__section__li}>
                <span className={styles.fourth__span}>Heat the pan</span>:Place
                a non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className={styles.fourth__section__li}>
                <span className={styles.fourth__span}>Cook the omelette</span>
                :Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className={styles.fourth__section__li}>
                <span className={styles.fourth__span}>
                  Add fillings (optional)
                </span>
                :When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omellete.
              </li>
              <li className={styles.fourth__section__li}>
                <span className={styles.fourth__span}>Fold and serve</span>Fold
                and serve:As the omelette continues to cook, carefully lift one
                edge and fold it over the fillings. Let it cook for another
                minute, then slide it anto to plate.
              </li>
              <li className={styles.fourth__section__li}>
                <span className={styles.fourth__span}>Enjoy</span>:Serve hot,
                whit additional salt and pepper if needed.
              </li>
            </ol>
          </section>

          <section>
            <div className={`${young_serif.className} ${styles.fifth__title}`}>Nutrition</div>

            <p>
              <div>
                The table below shows nutritional values per serving whitout the
                additional fillings.
              </div>
            </p>

            <table className={styles.table__nutrition}>
              <tr>
                <td  className={styles.table__td}>Calories</td>
                <td  className={styles.table__td}>277kcal</td>
              </tr>
              <tr>
                <td className={styles.table__td}>Carbs</td>
                <td className={styles.table__td}>0g</td>
              </tr>
              <tr>
                <td className={styles.table__td}>Protein</td>
                <td className={styles.table__td}>20g</td>
              </tr>
              <tr>
                <td className={styles.table__td}>Fat</td>
                <td className={styles.table__td}>22g</td>
              </tr>
            </table>
          </section>
        </div>
      </article>
    </>
  );
};

export default Index;
