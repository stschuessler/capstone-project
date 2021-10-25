function Categories({ categories, onClickExit, uniqueCategories }) {
  return (
    <>
      {categories && (
        <section>
          <input type="checkbox" id="" onClick="myFunction()" />
          <p id="">{uniqueCategories[0]}</p>
          <input type="checkbox" id="" onClick="myFunction()" />
          <p id="">{uniqueCategories[1]}</p>
          <input type="checkbox" id="" onClick="myFunction()" />
          <p id="">{uniqueCategories[2]}</p>

          <button>Load</button>
          <button>Clear</button>
          <button onClick={() => onClickExit()}>Exit</button>
        </section>
      )}
    </>
  )
}

export default Categories
