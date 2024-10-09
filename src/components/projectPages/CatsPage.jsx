import NavBar from "../NavBar.jsx";
import { useEffect } from "react";

const cats = import.meta.glob('../../assets/img/cats/cat*.{png,jpg}', { eager: true, query: '?url', import: 'default' });
import cowImage from "../../assets/img/cats/cow-harold.png";

export function CatSquare(props) {
  return (
    <>
      <div className="art-wrap mb-4">
        <div className="art-background">
          <div className="art-text">
            <h3>{props.title}</h3>
            <span>{props.medium}</span>
          </div>
        </div>
        <img className="w-full h-auto" src={props.src} />
      </div>
    </>
  )
}

function createCat(url, image) {
  let catName = url.substring(22, url.length - 4).split("-")
  return { title: catName[1].replace("_", " "), species: catName[0], image }
}


export default function CatInfo() {
  let catCount = [4, 6, 6, 8];
  let countInd = 0;

  let catCols = Object.entries(cats).reduce((acc, [url, image], index) => {
    let cat = createCat(url, image)
    acc[countInd].push(cat)
    if (acc[countInd].length >= catCount[countInd]) {
      countInd += 1;
    }
    return acc
  }, [[], [], [], []]);

  catCols[3].push({ title: "Harold", species: "therapy cow (honorary cat)", image: cowImage })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="mx-auto w-10/12">
        <NavBar />
        <div className="grid grid-cols-4 container mt-20 gap-4">
          <div className="">
            <div className="mb-12">
              <h1 className="mb-2 text-4xl">Cat Photos!</h1>
              <p className="mb-10 text-xl ">Here are all the cats I saw during my time at Georgia Tech. Captured for posterity.
              </p>
              <p className="">Atlanta, GA</p>
              <p className="text-sm">2020-2024</p>
            </div>

            {catCols[0].map((cat, index) => (
              < CatSquare key={`${0}_${index}`}
                title={cat.title}
                medium={cat.species}
                src={cat.image} />
            ))}
          </div>
          {catCols.slice(1, 4).map((col, i) => (
            <div>
              {col.map((cat, index) => (
                < CatSquare key={`${i + 1}_${index}`}
                  title={cat.title}
                  medium={cat.species}
                  src={cat.image} />
              ))}
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
