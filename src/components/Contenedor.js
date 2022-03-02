import './Contenedor.css';

function Contenedor() {
  return (
    <div className="Contenedor">
      <div className='contenedor' id='contenedorModo'>
        <div className='w-96 my-2 flex flex-row items-center justify-end'>
          <p className='mr-2'>Modo Oscuro</p>
          <label className='switch'>
            <input type='checkbox' id='checkbox' onClick={toggleMode}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className="w-96 b-black bg-gray-300 dark:bg-gray-900 p-3">
            <h2 className="font-semibold text-left dark:text-gray-100">Contenedor de Prueba</h2>
            <p className="text-justify dark:text-gray-400 my-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore labore illo, dicta corporis vero sit harum tempora eos tempore. Laborum culpa accusantium perferendis tempora deserunt dolorum, libero eius praesentium! Minus vel est expedita rerum suscipit, quas voluptatum voluptates blanditiis eius.
            </p>
            <p className='text-xs dark:text-gray-100'>
              Hola soy Barney
            </p>
        </div>,
      </div>
    </div>
  );
}

function toggleMode(){
  const switchMode = document.getElementById('checkbox');
  const contenedorModo = document.getElementById('contenedorModo');
  if(switchMode.checked){
    contenedorModo.classList.add('dark');
  }else{
    contenedorModo.classList.remove('dark');
  }

}

export default Contenedor;
