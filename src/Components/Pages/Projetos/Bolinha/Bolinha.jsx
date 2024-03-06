import './styles.css'

function Bolinha({categoria}){
   return (
      <>
         {categoria === 'Desenvolvimento' && <p className='bolinha-vermelha'></p>}
         {categoria === 'Planejamento' && <p className='bolinha-verde '></p>}
         {categoria === 'Infraestrutura' && <p className='bolinha-azul'></p>}
         {categoria === 'Design' && <p className='bolinha-amarelo'></p>}
      </>
   )
}

export default Bolinha