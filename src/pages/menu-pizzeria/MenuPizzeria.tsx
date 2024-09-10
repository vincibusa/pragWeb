import { LePizze, LePizzeSpeciali } from "../../constants/menu";


export default function MenuPizzeria() {
  return (
    <div className="container">
   

    <div className="text-center mt-4 mb-4">
      <h1>Le Pizze</h1>
    </div>

    {/* sezione per sezione */}
    {LePizze.map((item, index) => (
      <div key={index} className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-100 fw-bold text-dark text-start">{item.name}</div>
          <div className="text-nowrap">{item.price}</div>
        </div>
        <div className="text-start fw-normal text-muted">{item.description}</div>
      </div>
    ))}

<div className="text-center mt-4 mb-4">
      <h1>Le Pizze Speciali</h1>
    </div>
    {LePizzeSpeciali.map((item, index) => (
      <div key={index} className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-100 fw-bold text-dark text-start">{item.name}</div>
          <div className="text-nowrap">{item.price}</div>
        </div>
        <div className="text-start fw-normal text-muted">{item.description}</div>
      </div>
    ))}

  </div>
  )
}
