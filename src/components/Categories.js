function Categories({ categories, onClickExit }) {
  return (
    <>
      {categories && (
        <section>
          <input type="checkbox" id="" onClick="myFunction()" />
          <p id="">placeholder</p>
          <input type="checkbox" id="" onClick="myFunction()" />
          <p id="">placeholder</p>
          <input type="checkbox" id="" onClick="myFunction()" />
          <p id="">placeholder</p>

          <button>Load</button>
          <button>Clear</button>
          <button onClick={() => onClickExit()}>Exit</button>
        </section>
      )}
    </>
  )
}

export default Categories
